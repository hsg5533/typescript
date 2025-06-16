/**
 * 이차원 배열의 인덱스를 그룹화
 * @param arr 이차원 배열
 * @returns 인덱스 배열
 * @example groupedIndex([[1, 2], [3, 4]]) // [0, 1]
 */
function groupedIndex<T>(arr: T[][]) {
  return arr.map((_, i) => i);
}

console.log(
  groupedIndex([
    [1, 2],
    [3, 4],
  ])
);
