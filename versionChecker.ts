/**
 * 두 버전 문자열을 비교하여 v1이 v2보다 이전 버전인지 확인하는 함수
 * @param v1 비교할 첫 번째 버전 문자열
 * @param v2 비교할 두 번째 버전 문자열
 * @returns v1이 v2보다 이전 버전이면 true, 아니면 false
 * @example
 * versionChecker("1.0.11", "1.0.12") // true
 * versionChecker("1.0.12", "1.0.11") // false
 */
function versionChecker(v1: string, v2: string) {
  const v1Array = v1.split(".").map(Number);
  const v2Array = v2.split(".").map(Number);
  for (let i = 0; i < Math.max(v1Array.length, v2Array.length); i++) {
    const num1 = v1Array[i] || 0;
    const num2 = v2Array[i] || 0;
    if (num1 < num2) {
      return true;
    } else if (num1 > num2) {
      return false;
    }
  }
  return false;
}

console.log(versionChecker("1.0.11", "1.0.12"));
console.log(versionChecker("1.0.12", "1.0.11"));
