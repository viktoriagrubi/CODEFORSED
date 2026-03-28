// link do zadania -> https://codeforces.com/problemset/problem/977/A

// rozwiązanie:

function wrongSubtraction(n: number, k: number): number {
  for (let i = 0; i < k; i++) {
    if (n % 10 === 0) {
      n = n / 10;
    } else {
      n = n - 1;
    }
  }
  return n;
}
