/**
 * 주어진 밀리초 값을 연, 월, 일, 시간, 분, 초로 변환하여 문자열로 반환하는 함수
 * @param time 변환할 시간(밀리초 단위)
 * @returns 연, 월, 일, 시간, 분, 초를 포함하는 문자열
 * @example
 * const result = timePart(31536000000); // "1년 "
 */
function timePart(time: number) {
  // 년 수 계산
  const year = Math.floor(time / (1000 * 60 * 60 * 24 * 365));
  // 월 수 계산
  const month = Math.floor(
    (time % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  // 일 수 계산
  const day = Math.floor(time / 1000 / 60 / 60 / 24);
  // 시간 계산
  const hour = Math.floor((time / 1000 / 60 / 60) % 24);
  // 분 계산
  const minute = Math.floor((time / 1000 / 60) % 60);
  // 초 계산
  const second = Math.floor((time / 1000) % 60);
  // 각각의 문자열 생성
  const yearString = year > 0 ? `${year}년 ` : "";
  const monthString = month > 0 ? `${month}개월 ` : "";
  const dayString = day > 0 ? `${day}일 ` : "";
  const hourString = hour > 0 ? `${hour}시간 ` : "";
  const minuteString = minute > 0 ? `${minute}분 ` : "";
  const secondString = second > 0 ? `${second}초 ` : "";
  // 최종 문자열 반환
  return `${yearString}${monthString}${dayString}${hourString}${minuteString}${secondString}`.trim();
}

console.log(timePart(31536000000));
