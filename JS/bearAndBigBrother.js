// link do zadania -> https://codeforces.com/problemset/problem/791/A

// rozwiązanie:

function bearYears(a, b) {
  let years = 0;
  while (a <= b) {
    a = a * 3;
    b = b * 2;
    years++;
  }
  return years;
}
