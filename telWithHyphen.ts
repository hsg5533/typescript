/**
 * 전화번호를 하이픈(-) 형식으로 변환하는 함수
 * @param number 변환할 전화번호 문자열
 * @returns 하이픈이 추가된 전화번호 문자열
 * @example
 * const formattedNumber = telWithHyphen("01012345678"); // "010-1234-5678"
 */
function telWithHyphen(number: string) {
  // 숫자가 아닌 모든 문자를 제거
  const tel = number.replace(/[^0-9]/g, "");
  // 전화번호 길이에 따른 형식 규칙 배열
  const rules = [
    { size: 7, rule: `${tel.substring(0, 3)}-${tel.substring(3)}` }, // 7자리 전화번호 형식
    { size: 8, rule: `${tel.substring(0, 4)}-${tel.substring(4)}` }, // 8자리 전화번호 형식
    {
      size: 10,
      rule: tel.startsWith("02") // 10자리 전화번호의 경우, 서울 지역번호 처리
        ? `${tel.substring(0, 2)}-${tel.substring(2, 6)}-${tel.substring(6)}` // 02로 시작
        : `${tel.substring(0, 3)}-${tel.substring(3, 6)}-${tel.substring(6)}`, // 그 외 지역번호
    },
    {
      size: 11,
      rule: `${tel.substring(0, 3)}-${tel.substring(3, 7)}-${tel.substring(7)}`, // 11자리 전화번호 형식
    },
  ];
  // 규칙을 순회하며 전화번호 길이에 맞는 형식 반환
  for (const item of rules) {
    if (tel.length === item.size) {
      return item.rule; // 해당 규칙의 전화번호 형식 반환
    }
  }
  // 유효한 전화번호 길이가 아닐 경우 원래 입력된 번호 반환
  return number;
}

const formattedNumber = telWithHyphen("01012345678");
console.log(formattedNumber);
