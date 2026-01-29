// link do zadania -> https://codeforces.com/problemset/problem/112/A

// rozwiązanie:

function petyaStrings(a, b) {
  let A = a.toUpperCase();
  let B = b.toUpperCase();

  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[i]) {
      return -1;
    } else if (A[i] > B[i]) {
      return 1;
    }
  }

  return 0;
}
