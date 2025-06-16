/**
 * 문자열을 특정 길이만큼 앞에서부터 채움
 * @param targetLength 채울 목표 길이
 * @param padString 채울 문자열
 * @param str 대상 문자열
 * @returns 앞이 채워진 문자열
 * @example padStart(5, '0', '12') // '0012'
 */
function padStart(targetLength: number, padString: string, str: string) {
  return str.length >= targetLength
    ? str
    : new Array(targetLength - str.length + 1).join(padString) + str;
}

console.log(padStart(5, "0", "12"));
