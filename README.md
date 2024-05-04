# Gold Ring Guess
This is a math calculation and estimation game I made using HTML, CSS, and JavaScript.

## Description
In this game, you play for 10 rounds and try for the lowest score possible.

Each round, a grid of 25 circles fills in with white (1pt), light gray (2 pts), dark gray (3 pts), and black (4 pts) circles. A gold ring will randomly appear around 1 out of 25 circles.

You use the slider to estimate the total grid value which is calculated by adding 3 numbers:

**Darkness score- All 25 circles are added up by color value:**
white: 1pt
light gray: 2 pts
dark gray: 3 pts
black: 4 pts

**In-a-Row Score- Points are scored for having 3, 4, or 5 of the same color in a row**
3-in-a-row is worth 9 x color value
4-in-a-row is worth 16 x color value
5-in-a-row is worth 25 x color value
||white|light gray|dark gray|black|
|---|---|---|---|---|
3-in-a-row|9|18|27|36|
4-in-a-row|16|32|48|64|
5-in-a-row|25|50|75|100|

**Gold Ring Score- Each gold ring is worth 10 pts x the color value of the circle it surrounds**
white: 10 pts
light gray: 20 pts
dark gray: 30 pts
black: 40 pts

Each round, the difference between your estimate and the actual grid value is calculated as "Difference" on the screen

A deduction of 10% of the grid value is subtracted from your score as "Deduction". This balances the difficulty of guessing higher-scoring grids, and rewards players who guess high-scoring grids accurately.

If a guess is exactly right, the Difference is 0, and the Deduction is multiplied by 2 to reward accuracy.






## 