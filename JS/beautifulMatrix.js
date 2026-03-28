// link do zadania -> https://codeforces.com/problemset/problem/263/A

// rozwiązanie:

function beautifulMatrix(a) {
  let row;
  let col;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (a[i][j] === 1) {
        row = i + 1;
        col = j + 1;
      }
    }
  }
  return Math.abs(row - 3) + Math.abs(col - 3);
}

const input = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const result = beautifulMatrix(input);
console.log(result);
