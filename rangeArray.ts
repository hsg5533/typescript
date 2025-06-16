/**
 * 범위 내의 숫자를 배열로 반환
 * @param min 최소값
 * @param max 최대값
 * @returns 숫자 범위 배열
 * @example getRangeArray(1000, 2000) // [1000, 1500, 2000]
 */
function getRangeArray(min: number, max: number) {
  const result: number[] = [];
  for (let i = min; i <= max; i += 500) {
    result.push(i);
  }
  return result;
}

console.log(getRangeArray(1000, 2000));
