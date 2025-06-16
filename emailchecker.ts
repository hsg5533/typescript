/**
 * 이메일 형식을 검사하는 함수
 * @param mail 검사할 이메일 문자열
 * @returns 유효하지 않은 이메일이면 true, 유효한 이메일이면 false
 * @example
 * emailchecker("hsg5533") // true (유효하지 않음)
 * emailchecker("hsg5533@naver.com") // false (유효함)
 */
function emailchecker(mail: string) {
  return !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail);
}

console.log(emailchecker("hsg5533"));
console.log(emailchecker("hsg5533@naver.com"));
