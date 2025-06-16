/**
 * 배열을 주어진 크기로 분할
 * @param arr 배열
 * @param chunkSize 분할할 크기
 * @returns 분할된 배열
 * @example splitArray([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
 */
function splitArray<T>(arr: T[], chunkSize: number) {
  let result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

console.log(splitArray([1, 2, 3, 4], 2));
