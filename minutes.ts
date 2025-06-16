/**
 * 5분부터 90분까지 5분 간격의 분 문자열 배열을 생성하는 함수
 * @returns 5분 간격의 분 문자열 배열
 * @example
 * const minutes = getMinutes(); // ["05분", "10분", ..., "90분"]
 */
function getMinutes() {
  const minutes: string[] = [];
  // 5분부터 90분까지 5분 간격으로 반복
  for (let i = 5; i <= 90; i += 5) {
    const timeString = i < 10 ? "0" + i + "분" : i + "분"; // 분 형식 조정
    minutes.push(timeString); // 배열에 추가
  }
  return minutes; // 결과 반환
}

console.log(getMinutes());
