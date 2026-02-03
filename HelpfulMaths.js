// link do zadania -> https://codeforces.com/problemset/problem/339/A

// rozwiązanie:

function helpfulMath(a) {
  let arr = a.split("+").sort().join("+");

  return arr;
}
