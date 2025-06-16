/**
 * 이름의 유효성을 검사하는 함수
 * @param name 검사할 이름 문자열
 * @returns 유효하지 않으면 true, 유효하면 false
 * @example
 * nameChecker("ㄱㄷㄱㄷ") // true
 * nameChecker("정호상") // false
 * nameChecker("정호상거") // true
 * nameChecker("John Apple") // false
 */
function nameChecker(name: string) {
  if (name.length <= 1) {
    return true;
  } else {
    return !/^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/.test(name);
  }
}

console.log(nameChecker("ㄱㄷㄱㄷ"));
console.log(nameChecker("정호상"));
