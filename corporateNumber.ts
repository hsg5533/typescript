/**
 * 사업자 등록번호의 유효성을 검사하는 함수
 * @param number 검사할 사업자 등록번호 문자열
 * @returns 유효하면 true, 유효하지 않으면 false
 * @example
 * checkCorporateNumber("123-45-67891") // false (유효하지 않음)
 * checkCorporateNumber("123-45-6789") // true (유효함)
 */
function checkCorporateNumber(number: string) {
  const numberMap = number
    .replace(/-/gi, "")
    .split("")
    .map((d) => parseInt(d, 10));
  if (numberMap.length === 10) {
    const keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
    let chk = 0;
    keyArr.forEach((d, i) => {
      chk += d * numberMap[i];
    });
    chk += Math.floor((keyArr[8] * numberMap[8]) / 10);
    return Math.floor(numberMap[9]) === (10 - (chk % 10)) % 10;
  }
  return false;
}

console.log(checkCorporateNumber("123-45-67891"));
