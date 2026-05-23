# Reference — Math Game Title Translations

Use these idiomatic Turkish titles when generating any of the 40 games from `prompts.md`. Always show both EN and TR in `index.html` cards and switch the in-game `<h1>` via `STRINGS[lang].title`.

## Grade 1

| #  | EN                       | TR                       | Code         |
| -- | ------------------------ | ------------------------ | ------------ |
|  1 | Number Garden            | Sayı Bahçesi             | MAT.1.1.1    |
|  2 | Treasure Count           | Hazine Sayımı            | MAT.1.1.2    |
|  3 | Ten-Frame Picnic         | Onluk Piknik             | MAT.1.1.2    |
|  4 | Line-Up Adventure        | Sıra Macerası            | MAT.1.1.3    |
|  5 | More Or Less Monsters    | Az Çok Canavarları       | MAT.1.1.4    |
|  6 | Sky Ladder               | Gökyüzü Merdiveni        | MAT.1.1.5    |
|  7 | Jumping Frogs            | Zıplayan Kurbağalar      | MAT.1.1.5    |
|  8 | Rocket Countdown         | Roket Geri Sayım         | MAT.1.1.5    |
|  9 | Pattern Parade           | Örüntü Geçidi            | MAT.1.1.6    |
| 10 | Number Train Patterns    | Sayı Treni Örüntüleri    | MAT.1.1.6    |
| 11 | Guess The Jar            | Kavanozu Tahmin Et       | MAT.1.1.7    |
| 12 | Desk Detective           | Sıra Dedektifi           | MAT.1.1.8    |
| 13 | Balance Bakery           | Terazi Fırını            | MAT.1.1.8    |
| 14 | Money Market             | Para Pazarı              | MAT.1.1.9    |
| 15 | Snack Shop Addition      | Atıştırmalık Toplama     | MAT.1.2.1    |
| 16 | Toy Box Subtraction      | Oyuncak Kutusu Çıkarma   | MAT.1.2.1    |
| 17 | Math Mind Magic          | Matematik Sihri          | MAT.1.2.2    |
| 18 | Equal Sign Balance       | Eşittir Terazisi         | MAT.1.2.3    |
| 19 | Map Quest                | Harita Görevi            | MAT.1.3.1    |
| 20 | Shape Safari Data Day    | Şekil Safarisi Veri Günü | MAT.1.3.5 + MAT.1.4.1 |

## Grade 2

| #  | EN                       | TR                       | Code         |
| -- | ------------------------ | ------------------------ | ------------ |
| 21 | Number City              | Sayı Şehri               | MAT.2.1.1    |
| 22 | Base-Ten Builder         | Onluk İnşaatçı           | MAT.2.1.2    |
| 23 | Robot Decomposer         | Robot Ayrıştırıcı        | MAT.2.1.2    |
| 24 | Number Line River        | Sayı Doğrusu Nehri       | MAT.2.1.3    |
| 25 | Skip Count Carnival      | Ritmik Sayma Karnavalı   | MAT.2.1.4    |
| 26 | Pattern Lab              | Örüntü Laboratuvarı      | MAT.2.1.5    |
| 27 | Estimation Explorer      | Tahmin Kâşifi            | MAT.2.1.6    |
| 28 | Fraction Pizza Party     | Kesir Pizza Partisi      | MAT.2.1.7    |
| 29 | Coin Combo Shop          | Bozuk Para Dükkânı       | MAT.2.1.8    |
| 30 | Clock Castle             | Saat Kalesi              | MAT.2.1.9    |
| 31 | Calendar Quest           | Takvim Görevi            | MAT.2.1.9    |
| 32 | Measure Mission          | Ölçüm Görevi             | MAT.2.1.10 + MAT.2.1.11 |
| 33 | Weigh It Workshop        | Tartı Atölyesi           | MAT.2.1.10 + MAT.2.1.11 |
| 34 | Adventure Word Problems  | Maceralı Problemler      | MAT.2.2.1    |
| 35 | Strategy Stars           | Strateji Yıldızları      | MAT.2.2.2    |
| 36 | Inverse Machine          | Ters İşlem Makinesi      | MAT.2.2.3    |
| 37 | Equal Groups Zoo         | Eşit Gruplar Hayvanatı   | MAT.2.2.4    |
| 38 | Sharing Safari           | Paylaşım Safarisi        | MAT.2.2.4    |
| 39 | Operation Balance        | İşlem Terazisi           | MAT.2.2.6    |
| 40 | Geometry And Data Studio | Geometri ve Veri Stüdyosu | MAT.2.3.1, 2.3.4, 2.3.7, 2.4.1 |

## Common bilingual UI strings

| Key             | EN                          | TR                              |
| --------------- | --------------------------- | ------------------------------- |
| `playAgain`     | Play Again                  | Tekrar Oyna                     |
| `rewardTitle`   | 🎉 You Won! 🎉              | 🎉 Kazandın! 🎉                 |
| `rewardMsg`     | Great job, math star!       | Aferin, matematik yıldızı!      |
| `rewardMissing` | (reward image missing)      | (ödül resmi eksik)              |
| `langToggle`    | TR (when in EN)             | EN (when in TR)                 |
| `playLabel`     | Play ▶                      | Oyna ▶                          |
| `progressLabel` | Progress                    | İlerleme                        |
| `gradeLabel(n)` | Grade N                     | N. Sınıf                        |

## Reward image filenames (truth on disk)

```
images/1tl.jpg
images/5tl.jpg
images/10tl.jpg
images/20tl.jpg
```

Weighted-random distribution: `1tl` 10%, `5tl` 50%, `10tl` 20%, `20tl` 20%.
