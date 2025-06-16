/**
 * 문자열이 특정 단어로 시작하는지 확인
 * @param str 문자열
 * @param word 비교할 단어
 * @returns 시작하면 true, 그렇지 않으면 false
 * @example startsWith('hello world', 'hello') // true
 */
function startsWith(str: string, word: string) {
  return str.lastIndexOf(word, 0) === 0;
}

console.log(startsWith("hello world", "hello"));
