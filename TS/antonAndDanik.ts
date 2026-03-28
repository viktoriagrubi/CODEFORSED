// link do zadania -> https://codeforces.com/problemset/problem/734/A

// rozwiązanie:

function antonAndDanik(arr: string): string {
  let countA = 0;
  let countD = 0;

  for (let char of arr) {
    if (char === "A") {
      countA++;
    } else {
      countD++;
    }
  }

  if (countA > countD) {
    return "Anton";
  } else if (countD > countA) {
    return "Danik";
  } else {
    return "Friendship";
  }
}
