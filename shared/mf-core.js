/* =========================================================================
   MATH FIRAS — Shared Core Library  (shared/mf-core.js)
   Exposes window.MF with i18n, rewards, confetti, math helpers, and block
   rendering. Load this BEFORE any game script.
   No dependencies, no build step.
   ========================================================================= */
'use strict';

window.MF = (function () {

  /* ------------------------------------------------------------------
     i18n
     createI18n(strings, storageKey?) → { lang (getter), S, setLang }
     - strings: { en: {...}, tr: {...} } object
     - storageKey: localStorage key (default 'mf_lang')
     Games keep their own `let lang` variable and update it via setLang
     so existing STRINGS[lang].x references keep working.
  ------------------------------------------------------------------ */
  function createI18n(strings, storageKey) {
    storageKey = storageKey || 'mf_lang';
    const _state = { lang: localStorage.getItem(storageKey) || 'tr' };

    function S(key) {
      const args = Array.prototype.slice.call(arguments, 1);
      const val = strings[_state.lang][key];
      return typeof val === 'function' ? val.apply(null, args) : val;
    }

    function setLang(newLang, afterFn) {
      _state.lang = newLang;
      localStorage.setItem(storageKey, newLang);
      document.documentElement.lang = newLang;
      if (afterFn) afterFn();
    }

    return {
      get lang()  { return _state.lang; },
      set lang(v) { _state.lang = v; },
      S,
      setLang,
    };
  }

  /* ------------------------------------------------------------------
     Rewards
  ------------------------------------------------------------------ */
  var DEFAULT_REWARD_LIST = [
    { src: '../images/1tl.jpg',  weight: 10, label: '1 TL'  },
    { src: '../images/5tl.jpg',  weight: 50, label: '5 TL'  },
    { src: '../images/10tl.jpg', weight: 20, label: '10 TL' },
    { src: '../images/20tl.jpg', weight: 20, label: '20 TL' },
  ];

  /* loadRewards(defaults?, configUrl?)
     Kicks off config.json fetch immediately; returns a store object
     whose `.list` property is updated once the fetch resolves.
     Use store.list when choosing a reward. */
  function loadRewards(defaults, configUrl) {
    var store = { list: (defaults || DEFAULT_REWARD_LIST).slice() };
    fetch(configUrl || '../config.json', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (cfg) {
        if (!cfg || !Array.isArray(cfg.rewards) || !cfg.rewards.length) return;
        var next = cfg.rewards.map(function (r) {
          return {
            src: /^(\.\.\/|\/|https?:\/\/)/.test(r.src)
              ? r.src
              : '../' + String(r.src).replace(/^\.?\//, ''),
            weight: Number(r.weight) || 0,
            label:  String(r.label || ''),
          };
        }).filter(function (r) { return r.src && r.weight > 0; });
        if (next.length) store.list = next;
      })
      .catch(function () {});
    return store;
  }

  /* chooseReward(list) → reward object (weighted random) */
  function chooseReward(list) {
    var total = list.reduce(function (s, r) { return s + r.weight; }, 0);
    var r = Math.random() * total;
    for (var i = 0; i < list.length; i++) {
      r -= list[i].weight;
      if (r <= 0) return list[i];
    }
    return list[0];
  }

  /* mountReward(wrapEl, reward, missingLabel)
     Preloads the image; appends <img> only on success to avoid
     the broken-image glyph appearing beside the fallback. */
  function mountReward(wrapEl, reward, missingLabel) {
    wrapEl.innerHTML = '';
    var img = new Image();
    img.alt = reward.label;
    img.onload = function () {
      wrapEl.innerHTML = '';
      wrapEl.appendChild(img);
    };
    img.onerror = function () {
      wrapEl.innerHTML =
        '<div class="fallback">🪙<br>' + reward.label +
        '<br><span style="font-size:0.7rem;opacity:0.7;">' + (missingLabel || '') + '</span></div>';
    };
    img.src = reward.src;
  }

  /* ------------------------------------------------------------------
     Confetti
  ------------------------------------------------------------------ */
  var CONFETTI_COLORS = ['#ff5252','#ffca28','#66bb6a','#42a5f5','#ab47bc','#ff9800'];

  /* spawnConfetti(layerEl, colors?)
     colors defaults to the standard b1-b6 palette. */
  function spawnConfetti(layerEl, colors) {
    layerEl.innerHTML = '';
    var palette = colors || CONFETTI_COLORS;
    for (var i = 0; i < 60; i++) {
      var c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.left             = Math.random() * 100 + '%';
      c.style.background       = palette[Math.floor(Math.random() * palette.length)];
      c.style.animationDuration = (2 + Math.random() * 2) + 's';
      c.style.animationDelay   = (Math.random() * 0.6) + 's';
      c.style.transform        = 'rotate(' + (Math.random() * 360) + 'deg)';
      layerEl.appendChild(c);
    }
  }

  /* ------------------------------------------------------------------
     Accessibility: focus trap for reward modal
  ------------------------------------------------------------------ */
  function trapFocus(modal) {
    var focusable = Array.from(
      modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])')
    );
    if (!focusable.length) return;
    modal._trapHandler = function (e) {
      if (e.key !== 'Tab') return;
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };
    modal.addEventListener('keydown', modal._trapHandler);
  }

  function releaseFocus(modal) {
    if (modal._trapHandler) {
      modal.removeEventListener('keydown', modal._trapHandler);
      modal._trapHandler = null;
    }
  }

  /* ------------------------------------------------------------------
     Math helpers
  ------------------------------------------------------------------ */
  function rand(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
  function pick(arr)  { return arr[Math.floor(Math.random() * arr.length)]; }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* makeDistractors(answer, count=2, opts={min:0, max:100})
     Generates pedagogically useful wrong answers for 0-100 number questions.
     Pass opts.min / opts.max to restrict range for different grades. */
  function makeDistractors(answer, count, opts) {
    var min    = (opts && opts.min !== undefined) ? opts.min : 0;
    var max    = (opts && opts.max !== undefined) ? opts.max : 100;
    if (count === undefined || count === null) count = 2;
    var used   = new Set([answer]);
    var out    = [];
    var safety = 0;
    while (out.length < count && safety++ < 80) {
      var d;
      var strategy = rand(1, 4);
      if (strategy === 1) {
        d = answer + (Math.random() < 0.5 ? rand(1, 10) : -rand(1, 10));
      } else if (strategy === 2) {
        d = rand(0, 9) * 10 + (answer % 10);
      } else if (strategy === 3) {
        d = Math.floor(answer / 10) * 10 + rand(0, 9);
      } else {
        d = (answer % 10) * 10 + Math.floor(answer / 10);
      }
      if (d < min || d > max || used.has(d)) continue;
      used.add(d);
      out.push(d);
    }
    while (out.length < count) {
      var fd = rand(min, max);
      if (!used.has(fd)) { used.add(fd); out.push(fd); }
    }
    return out;
  }

  /* ------------------------------------------------------------------
     Turkish number words (0–100)
  ------------------------------------------------------------------ */
  var ONES_WORDS = ['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz'];
  var TENS_WORDS = ['','on','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];

  function turkishWord(n) {
    if (n === 0)   return 'sıfır';
    if (n === 100) return 'yüz';
    var t = Math.floor(n / 10);
    var o = n % 10;
    if (t === 0) return ONES_WORDS[o];
    if (o === 0) return TENS_WORDS[t];
    return TENS_WORDS[t] + ' ' + ONES_WORDS[o];
  }

  /* ------------------------------------------------------------------
     Base-10 block HTML renderer (n in 0..100)
     Returns HTML string for display-only tens-rod + ones-cube blocks.
  ------------------------------------------------------------------ */
  function renderBlocks(n) {
    if (n === 0) return '<div class="zero-marker">0</div>';
    var tens = Math.floor(n / 10);
    var ones = n % 10;
    var html = '<div class="blocks">';
    for (var i = 0; i < tens; i++) {
      html += '<div class="tens-rod">' +
              '<span></span><span></span><span></span><span></span><span></span>' +
              '<span></span><span></span><span></span><span></span><span></span>' +
              '</div>';
    }
    if (ones > 0) {
      html += '<div class="ones-group">';
      for (var j = 0; j < ones; j++) html += '<div class="ones-cube"></div>';
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  /* ------------------------------------------------------------------
     Public API
  ------------------------------------------------------------------ */
  return {
    createI18n,
    loadRewards,
    chooseReward,
    mountReward,
    DEFAULT_REWARD_LIST,
    spawnConfetti,
    CONFETTI_COLORS,
    trapFocus,
    releaseFocus,
    rand,
    pick,
    shuffle,
    makeDistractors,
    ONES_WORDS,
    TENS_WORDS,
    turkishWord,
    renderBlocks,
  };

})();
