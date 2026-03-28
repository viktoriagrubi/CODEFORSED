// link do zadania -> https://codeforces.com/problemset/problem/59/A

// rozwiązanie:

function fixWord(s: string): string {
  let upper = 0;
  let lower = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i].toLowerCase()) {
      upper++;
    } else {
      lower++;
    }
  }

  if (upper > lower) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

console.log(fixWord("Dom"));
console.log(fixWord("VIP"));
console.log(fixWord("matryca"));
