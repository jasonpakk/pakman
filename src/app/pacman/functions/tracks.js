/**
 * This defines ranges where Pacman can move, for each row and column of the game
 */

const tracks = [
  [
    [[0, 25]], // first row (bottom)
    [
      [0, 0],
      [11, 11],
      [14, 14],
      [25, 25],
    ],
    [
      [0, 0],
      [11, 11],
      [14, 14],
      [25, 25],
    ],
    [
      [0, 5],
      [8, 11],
      [14, 17],
      [20, 25],
    ],
    [
      [2, 2],
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
      [23, 23],
    ],
    [
      [2, 2],
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
      [23, 23],
    ],
    [
      [0, 2],
      [5, 20],
      [23, 25],
    ],
    [
      [0, 0],
      [5, 5],
      [11, 11],
      [14, 14],
      [20, 20],
      [25, 25],
    ],
    [
      [0, 0],
      [5, 5],
      [11, 11],
      [14, 14],
      [20, 20],
      [25, 25],
    ],
    [
      [0, 11],
      [14, 25],
    ],
    [
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
    ],
    [
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
    ],
    [
      [5, 5],
      [8, 17],
      [20, 20],
    ],
    [
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
    ],
    [
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
    ],
    [
      [-1, 8, true],
      [17, 26, true],
    ],
    [
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
    ],
    [
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
    ],
    [
      [5, 5],
      [8, 17],
      [20, 20],
    ],
    [
      [5, 5],
      [11, 11],
      [14, 14],
      [20, 20],
    ],
    [
      [5, 5],
      [11, 11],
      [14, 14],
      [20, 20],
    ],
    [
      [0, 5],
      [8, 11],
      [14, 17],
      [20, 25],
    ],
    [
      [0, 0],
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
      [25, 25],
    ],
    [
      [0, 0],
      [5, 5],
      [8, 8],
      [17, 17],
      [20, 20],
      [25, 25],
    ],
    [[0, 25]],
    [
      [0, 0],
      [5, 5],
      [11, 11],
      [14, 14],
      [20, 20],
      [25, 25],
    ],
    [
      [0, 0],
      [5, 5],
      [11, 11],
      [14, 14],
      [20, 20],
      [25, 25],
    ],
    [
      [0, 0],
      [5, 5],
      [11, 11],
      [14, 14],
      [20, 20],
      [25, 25],
    ],
    [
      [0, 11],
      [14, 25],
    ],
  ],
  [
    [
      [0, 3],
      [6, 9],
      [15, 15],
      [21, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [6, 6],
      [9, 9],
      [15, 15],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 6],
      [9, 9],
      [15, 15],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [9, 9],
      [15, 15],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [9, 9],
      [15, 15],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 28],
    ],
    [
      [0, 0],
      [6, 6],
      [9, 9],
      [15, 15],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [6, 6],
      [9, 9],
      [15, 15],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 6],
      [9, 18],
      [21, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [6, 6],
      [9, 9],
      [12, 12],
      [18, 18],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [6, 6],
      [9, 9],
      [12, 12],
      [18, 18],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 3],
      [6, 9],
      [12, 12],
      [18, 21],
      [24, 28],
    ],
    [
      [0, 0],
      [6, 6],
      [12, 12],
      [18, 18],
      [24, 24],
    ],
    [
      [0, 0],
      [6, 6],
      [12, 12],
      [18, 18],
      [24, 24],
    ],
    [
      [0, 3],
      [6, 9],
      [12, 12],
      [18, 21],
      [24, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [6, 6],
      [9, 9],
      [12, 12],
      [18, 18],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [6, 6],
      [9, 9],
      [12, 12],
      [18, 18],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 6],
      [9, 18],
      [21, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [6, 6],
      [9, 9],
      [15, 15],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [6, 6],
      [9, 9],
      [15, 15],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [9, 9],
      [15, 15],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [9, 9],
      [15, 15],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 6],
      [9, 9],
      [15, 15],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 0],
      [3, 3],
      [6, 6],
      [9, 9],
      [15, 15],
      [21, 21],
      [24, 24],
      [28, 28],
    ],
    [
      [0, 3],
      [6, 9],
      [15, 15],
      [21, 28],
    ],
  ],
];

export default tracks;
