/**
 * 0시부터 24시까지의 시간을 문자열 배열로 생성하는 함수
 * @returns 24시간 형식의 시간 문자열 배열
 * @example
 * const hours = getHours(); // ["00:00", "01:00", ..., "24:00"]
 */
function getHours() {
  const hours: string[] = [];
  // 0부터 24까지 반복하여 시간을 생성
  for (let i = 0; i <= 24; i++) {
    const timeString = i < 10 ? "0" + i + ":00" : i + ":00"; // 시간 형식 조정
    hours.push(timeString); // 배열에 추가
  }
  return hours; // 결과 반환
}

console.log(getHours());
