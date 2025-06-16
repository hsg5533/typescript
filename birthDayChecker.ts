/**
 * 생년월일 형식을 검사하는 함수
 * @param number 검사할 생년월일 문자열
 * @returns 유효하지 않으면 true, 유효하면 false
 * @example
 * birthDayChecker("20200120") // false (유효함)
 * birthDayChecker("20201120") // false (유효함)
 * birthDayChecker("2020-01-20") // true (유효하지 않음)
 */
function birthDayChecker(number: string) {
  if (!parseInt(number, 10)) {
    return true;
  } else if (number.length !== 8) {
    return true;
  } else {
    return !/^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
      number
    );
  }
}

console.log(birthDayChecker("20200120"));
