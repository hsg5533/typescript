/**
 * 문자열을 특정 횟수만큼 반복
 * @param str 반복할 문자열
 * @param len 반복 횟수
 * @returns 반복된 문자열
 * @example repeatString('abc', 3) // 'abcabcabc'
 */
function repeatString(str: string, len: number) {
  let s = "";
  let i = 0;
  while (i++ < len) {
    s += str;
  }
  return s;
}

console.log(repeatString("abc", 3));
