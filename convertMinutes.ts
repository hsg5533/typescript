/**
 * 5분부터 90분까지의 시간을 시, 분 형식으로 변환하여 문자열 배열로 생성하는 함수
 * @returns 시, 분 형식의 문자열 배열
 * @example
 * const convertMinutes = getConvertMinutes(); // ["05분", "10분", "1시간", "1시간 5분", ..., "90분"]
 */
function getConvertMinutes() {
  const minutes: string[] = [];
  // 5분부터 90분까지 5분 간격으로 반복
  for (let i = 5; i <= 90; i += 5) {
    let timeString: string;
    // 60분을 초과하는 경우 시와 분으로 분리
    if (i > 60) {
      const hours = Math.floor(i / 60); // 시간 계산
      const remainingMinutes = i % 60; // 남은 분 계산
      timeString =
        remainingMinutes === 0
          ? `${hours}시간` // 남은 분이 없을 경우
          : `${hours}시간 ${remainingMinutes}분`; // 시와 분 모두 포함
    } else {
      timeString = i < 10 ? "0" + i + "분" : i + "분"; // 60분 이하의 경우
    }
    minutes.push(timeString); // 배열에 추가
  }
  return minutes; // 결과 반환
}

console.log(getConvertMinutes());
