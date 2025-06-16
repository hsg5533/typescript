/**
 * 문자열이 특정 단어로 끝나는지 확인
 * @param str 문자열
 * @param word 비교할 단어
 * @returns 끝나면 true, 그렇지 않으면 false
 * @example endsWith('hello world', 'world') // true
 */
function endsWith(str: string, word: string) {
  return str.indexOf(word, str.length - word.length) !== -1;
}

console.log(endsWith("hello world", "world"));
