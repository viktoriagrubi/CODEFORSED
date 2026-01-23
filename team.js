// link do zadania -> https://codeforces.com/problemset/problem/231/A

//rozwiązanie:

function doneTeam(exercises) {
  return exercises.reduce((count, task) => {
    const sum = task.reduce((acc, x) => acc + x, 0);
    return sum >= 2 ? count + 1 : count;
  }, 0);
}
