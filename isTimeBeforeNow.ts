/**
 * 주어진 날짜와 시간의 조합이 현재 시간보다 이전인지 확인하는 함수
 * @param date 비교할 날짜 문자열 (형식: "YYYY-MM-DD")
 * @param time 비교할 시간 문자열 (형식: "HH:mm")
 * @returns 입력된 시간이 현재 시간보다 이전이면 true, 아니면 false
 * @example
 * isTimeBeforeNow("2024-10-19", "12:00") // true (입력된 시간이 현재 시간보다 이전인 경우)
 * isTimeBeforeNow("2024-10-19", "18:00") // false (입력된 시간이 현재 시간보다 이후인 경우)
 */
function isTimeBeforeNow(date: string, time: string) {
  const now = new Date();
  // 현재 날짜에 입력된 시간 설정
  const [hours, minutes] = time.split(":").map(Number);
  const inputTime = new Date(date);
  inputTime.setHours(hours, minutes, 0, 0); // 시, 분, 초, 밀리초 설정
  // 입력된 시간이 오늘 날짜와 동일하지 않으면 false 반환
  if (
    inputTime.getFullYear() !== now.getFullYear() ||
    inputTime.getMonth() !== now.getMonth() ||
    inputTime.getDate() !== now.getDate()
  ) {
    return false;
  }
  return inputTime.getTime() < now.getTime(); // 시간이 현재 시간보다 이전인지 확인
}

console.log(isTimeBeforeNow("2024-10-19", "12:00"));
