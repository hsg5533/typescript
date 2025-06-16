/**
 * 일수를 연도와 월로 변환
 * @param day 일수
 * @returns 변환된 연도와 월 객체
 * @example dayToYearMonth(400) // { year: 1, month: 1 }
 */
function dayToYearMonth(day: number) {
  return { year: Math.floor(day / 365), month: Math.floor((day % 365) / 30) };
}

console.log(dayToYearMonth(400));
