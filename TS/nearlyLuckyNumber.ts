// link do zadania -> https://codeforces.com/problemset/problem/110/A

// rozwiązanie:

function nearlyLuckyNumber(n: string): string {
  let count = 0;

  for (let char of n) {
    if (char === "4" || char === "7") {
      count++;
    }
  }

  let countStr = count.toString();

  for (let char of countStr) {
    if (char !== "4" && char !== "7") {
      return "NO";
    }
  }

  return "YES";
}
