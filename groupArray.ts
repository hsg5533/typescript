/**
 * 배열을 그룹화
 * @param arr 배열
 * @param groupSize 그룹의 크기
 * @returns 그룹화된 배열
 * @example groupArray([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
function groupArray<T>(arr: T[], groupSize: number) {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    result.push(arr.slice(i, i + groupSize));
  }
  return result;
}

console.log(groupArray([1, 2, 3, 4, 5], 2));
