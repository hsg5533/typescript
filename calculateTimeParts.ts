/**
 * 주어진 밀리초 값을 일, 시간, 분, 초로 변환하여 문자열로 반환하는 함수
 * @param time 변환할 시간(밀리초 단위)
 * @returns 일, 시간, 분, 초를 포함하는 문자열
 * @example
 * const result = calculateTimeParts(90061000); // "1일 1시간 1분 1초"
 */
function calculateTimeParts(time: number) {
  // 일 수 계산
  const day = Math.floor(time / 1000 / 60 / 60 / 24);
  // 시간 계산
  const hour = Math.floor((time / 1000 / 60 / 60) % 24);
  // 분 계산
  const minute = Math.floor((time / 1000 / 60) % 60);
  // 초 계산
  const second = Math.floor((time / 1000) % 60);
  // 각각의 문자열 생성
  const dayString = day > 0 ? `${day}일 ` : "";
  const hourString = hour > 0 ? `${hour}시간 ` : "";
  const minuteString = minute > 0 ? `${minute}분 ` : "";
  const secondString = second > 0 ? `${second}초 ` : "";
  // 최종 문자열 반환
  return `${dayString}${hourString}${minuteString}${secondString}`.trim();
}

const result = calculateTimeParts(90061000);
console.log(result);
