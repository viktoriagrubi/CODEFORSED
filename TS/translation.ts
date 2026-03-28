// link do zadania -> https://codeforces.com/problemset/problem/41/A

// rozwiązanie:
function translate(s: string, t: string) {
  let reversed = s.split("").reverse().join("");
  if (reversed === t) {
    return "YES";
  } else {
    return "NO";
  }
}
