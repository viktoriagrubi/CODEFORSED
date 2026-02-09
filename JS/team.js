/// link do zadania -> https://codeforces.com/problemset/problem/231/A

// rozwiązanie:
function doneTeam(exercises) {
  let count = 0;

  for (let task of exercises) {
    if (task[0] + task[1] + task[2] >= 2) {
      count++;
    }
  }

  return count;
}
