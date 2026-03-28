//link -> https://codeforces.com/problemset/problem/271/A

// rozwiązanie:

function isBeautiful(year: number): boolean {
  const digits = year.toString().split("");
  const unique = new Set(digits);
  return digits.length === unique.size;
}

function findNextYear(year: number): number {
  while (true) {
    year++;
    if (isBeautiful(year)) {
      return year;
    }
  }
}
