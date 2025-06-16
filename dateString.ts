/**
 * 연도와 월로 된 문자열을 포맷
 * @param input 'yyyyMM' 형식의 문자열
 * @returns 변환된 'yyyy.MM' 형식의 문자열
 * @example dateString('202410') // '2024.10'
 */
function dateString(input: string) {
  const match = input.match(/^(\d{4})(\d{2})$/);
  if (match) {
    const year = match[1];
    const month = match[2];
    return `${year}.${month}`;
  }
  return input;
}

console.log(dateString("202410"));
