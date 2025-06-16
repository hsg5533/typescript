/**
 * 배열에서 특정 인덱스의 값을 제거
 * @param arr 배열
 * @param index 제거할 인덱스
 * @returns 값이 제거된 배열
 * @example removeIndexArray([1, 2, 3], 1) // [1, 3]
 */
function removeIndexArray<T>(arr: T[], index: number) {
  return arr.filter((_, i) => i !== index);
}

console.log(removeIndexArray([1, 2, 3, 2], 1));
