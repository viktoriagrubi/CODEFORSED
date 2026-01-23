// link do zadania -> https://codeforces.com/problemset/problem/282/A

//rozwiązanie:

function bitPlusMinus(commands) {
  let x = 0;
  for (let c of commands) {
    c.includes("++") ? x++ : x--;
  }
  return x;
}

const commands = ["X++", "--X"];
console.log(bitPlusMinus(commands));
