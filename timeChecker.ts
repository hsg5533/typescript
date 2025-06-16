/**
 * 시간 문자열을 분으로 변환하는 함수
 * @param time 변환할 시간 문자열 (형식: "HH:mm")
 * @returns 총 분 수
 * @example
 * convertToMinutes("01:00") // 60
 * convertToMinutes("02:30") // 150
 */
function convertToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

/**
 * 두 시간 문자열을 비교하여 상태에 따라 결과를 반환하는 함수
 * @param dateStatus 날짜 상태 (true: 날짜가 유효하지 않음)
 * @param time1 비교할 첫 번째 시간 문자열
 * @param time2 비교할 두 번째 시간 문자열
 * @returns 조건에 따라 true 또는 false를 반환
 * @example
 * timeChecker(!true, "01:00", "12:00") // true
 */
function timeChecker(dateStatus: boolean, time1: string, time2: string) {
  if (dateStatus) {
    return false;
  } else {
    const minutes1 = convertToMinutes(time1);
    const minutes2 = convertToMinutes(time2);
    if (minutes1 < minutes2) {
      return false;
    } else if (minutes1 > minutes2) {
      return true;
    } else {
      return true;
    }
  }
}
