// link: https://codeforces.com/problemset/problem/546/A

// rozwiązanie:

function soldierAndBananas(k: number, n: number, w: number): number {
  const totalCost = (k * w * (w + 1)) / 2;
  return Math.max(0, totalCost - n);
}
