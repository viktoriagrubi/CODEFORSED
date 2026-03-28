// link do zadania -> https://codeforces.com/problemset/problem/266/A

// rozwiązanie:

function stonesOnTheTable(s: string): number {
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    }
  }

  return count;
}
