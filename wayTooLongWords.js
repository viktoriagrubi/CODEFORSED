/// link do zadania -> https://codeforces.com/problemset/problem/71/A

//rozwiązanie:

function wayTooLongWords(word) {
  const result = [];
  for (let word of words) {
    if (word.length > 10) {
      result.push(word[0] + (word.length - 2) + word[word.length - 1]);
    } else {
      result.push(word);
    }
  }
  return result;
}
