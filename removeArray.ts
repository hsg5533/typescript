/**
 * 배열에서 특정 값을 제거
 * @param arr 배열
 * @param values 제거할 값들
 * @returns 값이 제거된 배열
 * @example removeArray([1, 2, 3, 2], 2) // [1, 3]
 */

function removeArray<T>(arr: T[], ...values: T[]) {
  return arr.filter((item) => !values.includes(item));
}

console.log(removeArray([1, 2, 3, 2], 1));
