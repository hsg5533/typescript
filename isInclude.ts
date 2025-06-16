/**
 * 주어진 데이터가 배열에 포함되어 있는지 확인하는 함수
 * @param dataArray 객체 배열
 * @param data 포함 여부를 확인할 객체
 * @returns 배열에 주어진 객체가 존재하면 true, 아니면 false
 * @example
 * const data = { exam: [{ exam1: "data" }] };
 * isInclude(data.exam, { exam1: "data" }) // true
 * isInclude(data.exam, { exam1: "not_data" }) // false
 */
function isInclude<T extends { [key: string]: any }>(
  dataArray: T[],
  data: { [key: string]: any }
) {
  return dataArray.some(
    (item) => JSON.stringify(item) === JSON.stringify(data)
  );
}
const data = { exam: [{ exam1: "data" }] };
console.log(isInclude(data.exam, { exam1: "data" }));
console.log(isInclude(data.exam, { exam1: "not_data" }));
