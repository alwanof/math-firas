# Pareto Math Game Prompts

Use these prompts to generate standalone HTML/CSS/JavaScript math games for children. Each prompt targets one high-impact concept from the Grade 1 or Grade 2 Turkish primary mathematics curriculum.

## Shared Requirements For Every Game

Unless a prompt says otherwise, every generated game should follow these rules:

- Create a single HTML file with embedded CSS and JavaScript. The only local file dependencies allowed are the reward images in the `images/` folder.
- Do not use external libraries, frameworks, build tools, external fonts, or network requests.
- Make the game visually attractive for young children with bright colors, large buttons, friendly characters drawn with CSS or simple SVG, animations, and encouraging feedback.
- Include clear child-friendly instructions on the screen.
- Do not build the game as a fixed set of questions with a final result after a fixed number of rounds.
- Build the game as an infinite loop of short randomized steps or challenges.
- The loop continues until the child reaches the required progress target.
- Include a clear progress bar that shows how close the child is to reaching the target.
- When the child answers correctly, increase the progress bar.
- When the child answers incorrectly, decrease the progress bar, but do not let it go below zero.
- Continue generating new randomized steps until the progress bar reaches the target.
- Once the target is reached, show a reward screen and randomly display one reward image from the `images/` folder.
- Use these reward image paths and probabilities:
  - `images/1tl.jpg`: 10%
  - `images/5tlt.jpg`: 50%
  - `images/10tl.jpg`: 20%
  - `images/20tl.jpg`: 20%
- Implement weighted random reward selection in JavaScript. The `1tl` reward must appear most frequently because it represents the common reward.
- Include instant feedback, progress updates, and a replay button that restarts progress from zero.
- Make it responsive for tablets, laptops, and classroom screens.
- Make controls usable by mouse, touch, and keyboard where reasonable.
- Keep the math aligned to the target grade and concept.
- Use randomized questions so the game is replayable.
- Add simple comments in the code explaining the main sections.

## Grade 1 Prompts

### 1. Number Garden: Match Quantities To Numerals

Prompt:

Create a standalone HTML/CSS/JavaScript math game for Grade 1 children called "Number Garden". The target concept is matching quantities to numerals from 0 to 20, aligned with `MAT.1.1.1`.

The game should show a cheerful garden scene with flowers, butterflies, apples, or bees. In each step, display a group of 0-20 objects and three large numeral choices. The child selects the numeral that matches the quantity. Include counting support: when the child taps an object, it briefly lights up and says its count order visually with a small number label.

Make the game attractive for kids with colorful CSS graphics, friendly animations, and positive feedback. Use the shared progress-loop and reward rules instead of a fixed number of questions. Keep the code in one HTML file with embedded CSS and JavaScript, no external libraries.

### 2. Treasure Count: Count Scattered And Organized Objects

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Treasure Count". The target concept is counting object groups in regular and scattered arrangements, aligned with `MAT.1.1.2`.

The game should show treasure items such as gems, coins, shells, and stars. Sometimes the objects appear in neat rows; sometimes they are scattered. The child must count the objects and type or choose the total. Include an optional "mark as counted" interaction: tapping an object changes its color so children can track what they counted.

Include levels from 1-10 objects first, then 11-20 objects using a "ten and some more" visual. Provide feedback that emphasizes careful one-to-one counting. Make it bright, playful, responsive, and contained in one HTML file with no external libraries.

### 3. Ten-Frame Picnic: Build 10 And Leftovers

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Ten-Frame Picnic". The target concept is understanding numbers up to 20 as a full ten plus leftovers, aligned with `MAT.1.1.2`.

The game should show picnic baskets as ten-frames. In each step, a number from 10 to 20 appears, and the child fills a ten-frame plus extra picnic spots with fruit. The game should visually show "10 + leftovers" without using formal place-value terminology too heavily.

Include drag-and-drop or tap-to-place fruit, friendly soundless visual feedback, progress feedback, and a "show hint" button that fills the first ten-frame. Make the game colorful, accessible, and contained in a single HTML file with embedded CSS and JavaScript.

### 4. Line-Up Adventure: Ordinal Numbers

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Line-Up Adventure". The target concept is ordinal numbers and positions such as first, second, third, and last, aligned with `MAT.1.1.3`.

Show a line of cute animal characters waiting for a bus, rocket, or ice cream stand. Ask questions like "Who is 3rd?", "Place the turtle in 5th position", or "Which animal is before the rabbit?" The child answers by clicking, dragging, or choosing from options.

Use up to 10 positions. Include visual labels, immediate feedback, and the shared progress-loop and reward flow. Make it appealing for children and contained in one HTML file with no external network assets.

### 5. More Or Less Monsters: Compare Quantities

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "More Or Less Monsters". The target concept is comparing two quantities using more, fewer, less, and equal, aligned with `MAT.1.1.4`.

Show two groups of friendly monsters holding snacks. The child chooses whether the left group has more, fewer, or the same number as the right group. Include visual one-to-one matching lines as a hint option.

Use quantities from 0 to 20. Include bright monster designs made with CSS, three big answer buttons, progress feedback, streak encouragement, and gentle corrections. Keep the game in one HTML file with embedded CSS and JavaScript.

### 6. Sky Ladder: Count Forward To 100

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Sky Ladder". The target concept is forward counting by ones up to 100, aligned with `MAT.1.1.5`.

The child helps a character climb a sky ladder by choosing the next number in a sequence. Show short sequences such as 27, 28, __ or 64, __, 66. Include a number path or 100 chart hint that can be opened when needed.

The game should use animated clouds, stars, and cheerful feedback. Increase difficulty as progress grows, and use the shared reward screen when the target is reached. Keep everything in one HTML file with no external libraries.

### 7. Jumping Frogs: Skip Counting By 2s, 5s, And 10s

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Jumping Frogs". The target concept is skip counting by 2s, 5s, and 10s within Grade 1 limits, aligned with `MAT.1.1.5`.

Show frogs jumping across lily pads labeled with numbers. In each step, the child chooses the next lily pad in a skip-counting pattern: by 2s up to 20, by 5s up to 100, or by 10s up to 100.

Include animated jumps, pattern highlighting, an optional hint that shows equal jumps, and progress feedback. Make it colorful, touch-friendly, and contained in a single HTML file.

### 8. Rocket Countdown: Count Backward From 20

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Rocket Countdown". The target concept is backward counting from 20, aligned with `MAT.1.1.5`.

The child launches a rocket by filling missing numbers in countdown sequences such as 20, 19, __, 17. Include levels for counting backward by ones and by twos from 20.

Use a fun space theme with CSS stars, planets, rocket animation, and launch moments when progress increases. Include instant feedback and a replay button. Keep the game in one HTML file with embedded CSS and JavaScript.

### 9. Pattern Parade: Repeating Shape Patterns

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Pattern Parade". The target concept is repeating shape patterns, aligned with `MAT.1.1.6`.

Show a parade of colorful shapes, animals, or balloons in repeating patterns such as AB, AAB, ABB, and ABC. The child chooses the next item or drags the missing item into the pattern.

Include a visual pattern rule hint, increasing complexity as progress grows, and friendly feedback. Make the UI playful, bright, and fully contained in one HTML file with no external libraries.

### 10. Number Train Patterns: Increasing And Decreasing Patterns

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Number Train Patterns". The target concept is increasing and decreasing number patterns, aligned with `MAT.1.1.6`.

Show a train with numbered cars. Some cars have missing numbers. The child fills the missing car by recognizing patterns that increase or decrease by 1, 2, 5, or 10 within Grade 1 limits.

Include draggable number cards, animation when the train moves, a hint that highlights the step size, and progress feedback. Keep it contained in one HTML file with embedded CSS and JavaScript.

### 11. Guess The Jar: Estimate Quantities Up To 20

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Guess The Jar". The target concept is estimating quantities up to 20, aligned with `MAT.1.1.7`.

Show a jar with candies, marbles, or stars. The child makes an estimate, then taps "count to check" to reveal the actual number. Increase progress more for close estimates, not only exact answers. Include reference hints for 5 and 10.

Use clear visuals, friendly explanations of estimation, randomized jars, progress feedback, and the shared reward screen when the target is reached. Keep the game in one HTML file with no external dependencies except local reward images.

### 12. Desk Detective: Non-Standard Length Measurement

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Desk Detective". The target concept is estimating and measuring length with non-standard units, aligned with `MAT.1.1.8`.

The child measures classroom objects using paperclips, hand spans, blocks, or pencils. In each step, the child first estimates how many units long an object is, then places repeated units end-to-end to measure it.

Include visual reminders that units should not overlap or leave gaps. Provide feedback comparing estimate and measurement. Make it colorful, classroom-themed, responsive, and contained in one HTML file.

### 13. Balance Bakery: Non-Standard Mass Measurement

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Balance Bakery". The target concept is comparing and measuring mass with non-standard units, aligned with `MAT.1.1.8`.

Show a simple balance scale in a bakery. The child compares pastries, fruit, and boxes using unit weights such as cubes or marbles. Ask questions like "Which is heavier?", "How many cubes balance the muffin?", and "Put the objects from lightest to heaviest."

Include drag-and-drop items, animated balance movement, clear feedback, and randomized repeated challenges. Keep the game in one HTML file with embedded CSS and JavaScript.

### 14. Money Market: Turkish Lira Recognition

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Money Market". The target concept is recognizing Turkish lira values: 1 TL, 5 TL, 10 TL, 20 TL, 50 TL, 100 TL, and 200 TL, aligned with `MAT.1.1.9`.

Create a pretend market with simple item cards and Turkish lira cards. The child matches a displayed value to the correct money card, orders money values from smallest to largest, and chooses which item can be bought with a given note.

Use simplified child-friendly money visuals, not realistic banknote copies. Include positive feedback, progress feedback, and a replay button. Keep everything in a single HTML file with no external network assets.

### 15. Snack Shop Addition: Add Within 20

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Snack Shop Addition". The target concept is addition within 20 using joining stories, aligned with `MAT.1.2.1`.

Show a snack shop where children combine two groups of snacks. Example: 7 strawberries plus 5 strawberries. The child chooses or enters the total. Use visual objects and equations side by side so students connect the story, objects, and symbols.

Keep sums at or below 20. Include animated joining, hints, progress feedback, and encouraging feedback. Make it colorful and contained in one HTML file.

### 16. Toy Box Subtraction: Subtract Within 20

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Toy Box Subtraction". The target concept is subtraction within 20 using taking-away stories, aligned with `MAT.1.2.1`.

Show toys in a box. A story removes some toys, such as "There are 14 blocks. 5 roll away. How many are left?" The child watches or controls the removal, then chooses the answer.

Include object animation, equations, no regrouping beyond Grade 1 expectations, progress feedback, and the shared reward screen when the target is reached. Use one HTML file with embedded CSS and JavaScript.

### 17. Math Mind Magic: Mental Addition And Subtraction

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Math Mind Magic". The target concept is reasoning about addition and subtraction results using estimation and mental strategies, aligned with `MAT.1.2.2`.

The game should present child-friendly mental math challenges within 20. Include strategies such as counting on, making 10, doubles, near doubles, and subtracting back. Each step should offer a "strategy card" hint.

Use a magician theme with cards, sparkles, and animated feedback. Include strategy explanations after each answer, progress feedback, and a replay button. Keep it contained in one HTML file.

### 18. Equal Sign Balance: Equality As Balance

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Equal Sign Balance". The target concept is understanding the equal sign as balance, not just "the answer comes next", aligned with `MAT.1.2.3`.

Show a balance scale with number expressions on both sides. The child chooses the missing number or expression to make both sides equal, using examples like 4 + 3 = __ + 2 or 8 - 3 = __.

Use visual blocks on both sides of the scale, gentle scaffolding, and a hint that counts each side. Include progress feedback and clear feedback. Keep it in one HTML file with embedded CSS and JavaScript.

### 19. Map Quest: Directions And Position Words

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Map Quest". The target concept is directions, position words, and following instructions to reach a target, aligned with `MAT.1.3.1`.

Show a simple grid map with a character, treasure, trees, bridges, and houses. The child follows instructions using words such as forward, backward, left, right, above, below, near, far, inside, outside, and between.

Include arrow buttons, short direction sequences, visual feedback, randomized quests, and the shared reward screen when the target is reached. Make the game bright, intuitive, and contained in a single HTML file.

### 20. Shape Safari Data Day: Shapes And Simple Graphs

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 1 math game called "Shape Safari Data Day". The target concepts are basic 2D shapes and simple categorical data, aligned with `MAT.1.3.5` and `MAT.1.4.1`.

The game should show safari animals carrying shape badges: triangle, square, rectangle, and circle. First, the child sorts animals by shape. Then the game automatically builds a tally table, frequency table, and object graph from the sorted groups. The child answers simple questions such as "Which shape has more?" or "How many circles?"

Use colorful animals, shape cards, drag-and-drop sorting, and graph visuals. Include feedback, progress feedback, and a replay button. Keep the code in a single HTML file with no external libraries.

## Grade 2 Prompts

### 21. Number City: Read And Write Numbers To 100

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Number City". The target concept is reading and writing numbers up to 100, aligned with `MAT.2.1.1`.

Show a colorful city with numbered buildings. In each step, display a quantity, word cue, or numeral, and ask the child to match or type the correct number from 0 to 100. Include both visual quantity groups and symbolic numerals.

Use bright CSS buildings, animated cars, clear instructions, progress feedback, and the shared reward screen when the target is reached. Keep the game contained in one HTML file with embedded CSS and JavaScript.

### 22. Base-Ten Builder: Tens And Ones

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Base-Ten Builder". The target concept is tens and ones place value, aligned with `MAT.2.1.2`.

The child builds two-digit numbers using tens rods and ones cubes. In each step, show a number and ask the child to create it, or show blocks and ask the child to identify the number.

Include drag-and-drop or tap-to-add blocks, automatic grouping feedback, progress feedback, and a hint that labels tens and ones. Make it colorful and contained in one HTML file with no external libraries.

### 23. Robot Decomposer: Compose And Decompose Two-Digit Numbers

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Robot Decomposer". The target concept is composing and decomposing two-digit numbers, aligned with `MAT.2.1.2`.

A friendly robot asks children to break numbers into tens and ones, such as 47 = 40 + 7, and to compose numbers from parts, such as 60 + 8 = 68. Include multiple-choice, drag cards, and number-building steps.

Use a playful robot lab theme, animations, progress feedback, hints, and increasing difficulty. Keep everything in a single HTML file.

### 24. Number Line River: Order And Nearest Ten

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Number Line River". The target concept is number order, number line placement, and nearest ten, aligned with `MAT.2.1.3`.

Show a river with stepping stones forming a number line from 0 to 100. The child places numbers on the line, orders number cards, and identifies whether a number is closer to the lower ten or upper ten.

Include drag-and-drop cards, visual distance feedback, progress feedback, and a hint mode. Make the game colorful, responsive, and contained in one HTML file.

### 25. Skip Count Carnival: 2s, 3s, 4s, 5s, And 10s

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Skip Count Carnival". The target concept is skip counting forward and backward by 2s, 3s, 4s, 5s, and 10s, aligned with `MAT.2.1.4`.

Create carnival rides where cars light up according to skip-counting rules. The child fills missing numbers, chooses the next or previous number, and identifies the skip size.

Include forward and backward sequences, a 100 chart hint, animated lights, and progress feedback. Keep the game in one HTML file with embedded CSS and JavaScript.

### 26. Pattern Lab: Number And Shape Pattern Rules

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Pattern Lab". The target concept is finding rules in number patterns and shape patterns that represent numbers, aligned with `MAT.2.1.5`.

Show a science lab where patterns appear on experiment tables. Include patterns such as growing shapes, repeating shapes, and number sequences. The child predicts the next terms and explains or selects the rule.

Include visual rule hints, feedback that names the pattern rule, and progress feedback. Keep the game attractive, accessible, and contained in one HTML file.

### 27. Estimation Explorer: Quantities Up To 50

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Estimation Explorer". The target concept is estimating quantities up to 50, aligned with `MAT.2.1.6`.

Show groups of objects in caves, jungles, or space scenes. The child estimates the number of objects, then reveals structured groups to compare the estimate with the actual count. Increase progress based on closeness.

Include reference anchors for 10, 25, and 50, progress feedback, and feedback about estimation strategies. Use one HTML file with embedded CSS and JavaScript.

### 28. Fraction Pizza Party: Whole, Half, And Quarter

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Fraction Pizza Party". The target concept is whole, half, and quarter relationships without formal fraction notation emphasis, aligned with `MAT.2.1.7`.

Show pizzas, cakes, or paper shapes. The child identifies whole, half, and quarter pieces, matches equal parts, and builds a whole from halves or quarters.

Use drag-and-drop pieces, cheerful party visuals, progress feedback, and hints showing equal parts. Keep the game contained in one HTML file.

### 29. Coin Combo Shop: Turkish Lira And Kurus

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Coin Combo Shop". The target concept is Turkish lira and kurus value combinations, aligned with `MAT.2.1.8`.

Create a pretend shop where children pay for small items using simplified 1 TL, 50 kurus, and 25 kurus coin cards plus lira notes where useful. The child forms target amounts, compares values, and finds equivalent combinations such as two 50 kurus coins equal 1 TL.

Use simplified money visuals, not realistic banknote or coin copies. Include feedback, progress feedback, and a replay button. Keep the game in one HTML file.

### 30. Clock Castle: Analog And Digital Time

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Clock Castle". The target concept is reading and writing analog and digital time, aligned with `MAT.2.1.9`.

Show a castle with clock towers. The child matches analog clocks to digital times and sets clock hands for whole hours, half hours, and quarter hours.

Include draggable clock hands or buttons to move the hands, instant feedback, progress feedback, and a hint explaining hour and minute hands. Keep everything in one HTML file.

### 31. Calendar Quest: Days, Weeks, Months, Seasons, Years

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Calendar Quest". The target concept is calendar units: day, week, month, season, and year, aligned with `MAT.2.1.9`.

Create a colorful calendar adventure where children answer questions about what comes next, how many days are in a week, matching months to seasons, and ordering daily routines.

Use calendar cards, seasonal scenes, drag-and-drop sorting, progress feedback, and clear feedback. Keep the code in a single HTML file with embedded CSS and JavaScript.

### 32. Measure Mission: Centimeters And Meters

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Measure Mission". The target concept is standard length measurement with centimeters and meters, aligned with `MAT.2.1.10` and `MAT.2.1.11`.

Show classroom and playground objects. The child chooses whether centimeters or meters are appropriate, estimates the length, then measures with an on-screen ruler or meter tape.

Include correct ruler alignment, no-gap measurement feedback, progress feedback, and friendly explanations. Keep the game responsive and contained in one HTML file.

### 33. Weigh It Workshop: Grams And Kilograms

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Weigh It Workshop". The target concept is standard mass measurement with grams and kilograms, aligned with `MAT.2.1.10` and `MAT.2.1.11`.

Show a workshop scale with objects such as apples, books, backpacks, feathers, and toys. The child chooses grams or kilograms, estimates mass, and compares the estimate with a measured result.

Include visual scale animation, unit choice buttons, progress feedback, and feedback about reasonable units. Keep the game in one HTML file.

### 34. Adventure Word Problems: Add And Subtract Within 100

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Adventure Word Problems". The target concept is solving addition and subtraction word problems within 100, aligned with `MAT.2.2.1`.

Create short story problems about treasure, animals, school supplies, or sports. The child identifies the given numbers, chooses addition or subtraction, and solves. Include visual models and equations.

Use sums up to 100 and subtraction from numbers up to 100, including appropriate Grade 2 regrouping support. Include randomized missions, hints, progress feedback, and feedback explaining the operation choice. Keep it contained in one HTML file.

### 35. Strategy Stars: Mental Addition And Subtraction

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Strategy Stars". The target concept is estimating and using mental strategies for addition and subtraction, aligned with `MAT.2.2.2`.

The game should present two-digit addition and subtraction challenges. Children choose a strategy card such as make ten, use tens and ones, count on, count back, doubles, or estimate first, then answer.

Include strategy explanations after each step, star-themed encouragement, progress feedback, and a space theme. Keep the game in one HTML file with embedded CSS and JavaScript.

### 36. Inverse Machine: Addition And Subtraction Relationship

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Inverse Machine". The target concept is the inverse relationship between addition and subtraction, aligned with `MAT.2.2.3`.

Show a machine that turns addition facts into related subtraction facts and subtraction facts into related addition facts. The child completes fact families such as 34 + 12 = 46, 46 - 12 = 34, and 46 - 34 = 12.

Use animated gears, number cards, hints, progress feedback, and feedback explaining inverse operations. Keep everything in a single HTML file.

### 37. Equal Groups Zoo: Multiplication As Repeated Addition

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Equal Groups Zoo". The target concept is multiplication as repeated addition and equal groups, aligned with `MAT.2.2.4`.

Show zoo enclosures with equal groups of animals. The child matches repeated addition to multiplication, builds equal groups, and finds the total. Use factors 1-5 and totals appropriate for Grade 2.

Include visual grouping, skip-count support, animated animals, progress feedback, and friendly feedback. Keep it contained in one HTML file with embedded CSS and JavaScript.

### 38. Sharing Safari: Division As Equal Sharing

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Sharing Safari". The target concept is division as equal sharing and repeated subtraction, aligned with `MAT.2.2.4`.

The child shares snacks equally among animals or repeatedly removes equal groups from a total. Use numbers up to 20 and divisors 2, 3, 4, and 5 with no remainders.

Include drag-to-share interaction, repeated subtraction visualization, progress feedback, and feedback connecting division to fair sharing. Keep it in one HTML file.

### 39. Operation Balance: Equality Across Four Operations

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Operation Balance". The target concept is equality across addition, subtraction, multiplication, and division, aligned with `MAT.2.2.6`.

Show a balance scale with expressions on both sides. The child chooses missing numbers or operations to make both sides equal, such as 3 x 4 = 6 + __ or 20 / 5 = __ - 1.

Use Grade 2-friendly numbers, visual supports, hints, progress feedback, and clear explanations that equality means both sides have the same value. Keep the game contained in one HTML file.

### 40. Geometry And Data Studio: Solids, Symmetry, And Two-Group Graphs

Prompt:

Create a standalone HTML/CSS/JavaScript Grade 2 math game called "Geometry And Data Studio". The target concepts are geometric solids, symmetry, and two-group categorical data, aligned with `MAT.2.3.1`, `MAT.2.3.4`, `MAT.2.3.7`, and `MAT.2.4.1`.

The game should have three mini-levels. First, children sort everyday objects into cube, rectangular prism, sphere, cylinder, and cone. Second, they identify whether a shape remains the same after rotation or resizing and find lines of symmetry. Third, they sort two groups of shape cards and build a tally table, frequency table, and shape graph.

Use colorful studio visuals, drag-and-drop sorting, graph-building animations, progress feedback, and the shared reward screen when the target is reached. Keep everything in one HTML file with embedded CSS and JavaScript, no external libraries.
