// link do zadania: https://codeforces.com/problemset/problem/677/A

// rozwiązanie:
function vanyaAndFence(heights: number[], h: number): number {
  let width = 0;

  for (let height of heights) {
    if (height > h) {
      width += 2;
    } else {
      width += 1;
    }
  }

  return width;
}
