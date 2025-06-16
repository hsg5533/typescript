/**
 * 시간을 'HH시 mm분' 형식으로 변환
 * @param inputTime 'HH:mm' 형식의 시간
 * @returns 변환된 시간 문자열
 * @example formattedTime('14:05') // '14시 05분'
 */
function formattedTime(inputTime: string) {
  const [hours, minutes] = inputTime.split(":").map(Number);
  return `${hours.toString().padStart(2, "0")}시 ${minutes
    .toString()
    .padStart(2, "0")}분`;
}
