/**
 * 문자열의 '{}' 부분을 값을 대입하여 포맷
 * @param str 포맷할 문자열
 * @param values 대입할 값들
 * @returns 포맷된 문자열
 * @example formatString('{} is {} years old', 'John', 30) // 'John is 30 years old'
 */
function formatString(str: string, ...values: any[]) {
  let formatted = str;
  for (let value of values) {
    formatted = formatted.replace("{}", value);
  }
  return formatted;
}

console.log(formatString("{} is {} years old", "John", 30));
