/**
 * 날짜 객체를 주어진 형식으로 포맷
 * @param date 날짜 객체
 * @param format 포맷 문자열
 * @returns 포맷된 날짜 문자열
 * @example formatDate(new Date(), 'yyyy-MM-dd') // '2024-10-19'
 */
function formatDate(date: Date, format: string) {
  if (!date.valueOf()) return " ";
  const weekName = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  return format.replace(
    /(yyyy|yy|MM|M|dd|E|e|hh|HH|mm|ss|a\/p|A\/P|FFFF|SSSS)/g,
    ($1) => {
      switch ($1) {
        case "yyyy":
          return date.getFullYear().toString().padStart(2, "0");
        case "yy":
          return (date.getFullYear() % 100).toString().padStart(2, "0");
        case "MM":
          return (date.getMonth() + 1).toString().padStart(2, "0");
        case "dd":
          return date.getDate().toString().padStart(2, "0");
        case "E":
          return weekName[date.getDay()];
        case "HH":
          return date.getHours().toString().padStart(2, "0");
        case "mm":
          return date.getMinutes().toString().padStart(2, "0");
        case "ss":
          return date.getSeconds().toString().padStart(2, "0");
        default:
          return $1;
      }
    }
  );
}

console.log(formatDate(new Date(), "yyyy-MM-dd"));
