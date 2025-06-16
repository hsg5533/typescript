/**
 * 전화번호 형식을 검사하는 함수
 * @param number 검사할 전화번호 문자열
 * @returns 유효하지 않으면 true, 유효하면 false
 * @example
 * phoneNumberChecker("+82-010-1234-5678") // true (유효하지 않음)
 * phoneNumberChecker("010-8765-4321") // true (유효하지 않음)
 * phoneNumberChecker("0108765432112") // true (유효하지 않음)
 * phoneNumberChecker("123-456-7890") // false (유효함)
 */
function phoneNumberChecker(number: string) {
  if (!parseInt(number, 10)) {
    return true;
  } else if (number.length !== 11) {
    return true;
  } else {
    return !/^(?:\+82|0)(10|1[1-9])-?([0-9]{3,4})-?([0-9]{4})$/.test(number);
  }
}

console.log(phoneNumberChecker("123-456-7890"));
