/**
 * 문자열의 일부를 '*'로 대체
 * @param str 문자열
 * @param len '*'로 대체할 시작 길이
 * @returns 대체된 문자열
 * @example asteriskString('abcdef', 3) // 'abc***'
 */
function asteriskString(str: string, len: number) {
  if (str) {
    let replaceText = str.slice(len);
    return str.replace(replaceText, "*".repeat(replaceText.length));
  }
  return str;
}

console.log(asteriskString("abcdef", 3));
