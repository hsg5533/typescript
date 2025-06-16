/**
 * 두 시간 문자열을 비교
 * @param time1 첫 번째 시간
 * @param time2 두 번째 시간
 * @returns time1이 이전이면 -1, 이후면 1, 동일하면 0
 * @example compareTime('2024-10-10', '2024-10-11') // -1
 */
function compareTime(time1: string, time2: string) {
  const date1 = new Date(time1);
  const date2 = new Date(time2);
  const timeValue1 = date1.getTime();
  const timeValue2 = date2.getTime();
  if (timeValue1 < timeValue2) {
    return -1;
  } else if (timeValue1 > timeValue2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareTime("2024-10-10", "2024-10-11"));
