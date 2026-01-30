// link do zadania -> https://codeforces.com/problemset/problem/236/A

// rozwiązanie:
function boyOrGirl(a) {
  const unique = new Set(a);

  if (unique.size % 2 === 0) {
    return "CHAT WITH HER!";
  } else {
    return "IGNORE HIM!";
  }
}
