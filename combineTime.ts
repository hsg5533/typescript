/**
 * 0시 0분부터 23시 59분까지의 모든 조합 시간을 문자열 배열로 생성하는 함수
 * @returns 시, 분 형식의 조합 문자열 배열
 * @example
 * const combinedTimes = getCombinedTime(); // ["00시 00분", "00시 01분", ..., "23시 59분"]
 */
function getCombineTime() {
  const combinedTimes: string[] = [];
  // 시간과 분 조합 생성
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      const hourString = hour < 10 ? "0" + hour : "" + hour; // 시 형식 조정
      const minuteString = minute < 10 ? "0" + minute : "" + minute; // 분 형식 조정
      const timeString = `${hourString}시 ${minuteString}분`; // 최종 문자열 생성
      combinedTimes.push(timeString); // 배열에 추가
    }
  }
  return combinedTimes; // 결과 반환
}

console.log(getCombineTime());
