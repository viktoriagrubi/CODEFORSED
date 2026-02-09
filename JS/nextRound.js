/// link do zadania -> https://codeforces.com/problemset/problem/158/A

// rozwiązanie:

function nextRound(scores, k) {
  return scores.filter((score) => score >= scores[k - 1] && score > 0).length;
}
