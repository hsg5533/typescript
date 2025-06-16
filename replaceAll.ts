/**
 * 문자열의 모든 특정 값을 새 값으로 교체
 * @param str 원본 문자열
 * @param oldValue 교체할 문자열
 * @param newValue 새로 교체할 문자열
 * @returns 교체된 문자열
 * @example replaceAll('hello hello', 'hello', 'hi') // 'hi hi'
 */
function replaceAll(str: string, oldValue: string, newValue: string) {
  return str.split(oldValue).join(newValue);
}

console.log(replaceAll("hello hello", "hello", "hi"));
