/**
 * 주어진 키와 값이 배열의 객체에 포함되어 있는지 확인하는 함수
 * @param dataArray 객체 배열
 * @param activeKey 확인할 키
 * @param value 확인할 값
 * @param statusKey 추가 상태 확인할 키
 * @returns 배열에서 조건을 만족하는 객체가 존재하면 true, 아니면 false
 * @example
 * const vehicles = [{ vehicle: "car", status: true }];
 * isValueInclude(vehicles, "vehicle", "car", "status") // true
 * isValueInclude(vehicles, "vehicle", "bike", "status") // false
 */
function isValueInclude<T extends { [key: string]: any }>(
  dataArray: T[],
  activeKey: string,
  value: string,
  statusKey: string
) {
  return dataArray.some((item) => item[activeKey] === value && item[statusKey]);
}

const vehicles = [{ vehicle: "car", status: true }];
console.log(isValueInclude(vehicles, "vehicle", "car", "status")); // true
console.log(isValueInclude(vehicles, "vehicle", "bike", "status")); // false
