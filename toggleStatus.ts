/**
 * 주어진 배열에서 특정 키와 값을 가진 객체의 상태를 토글하는 함수
 * @param array 상태를 변경할 객체의 배열
 * @param key 객체에서 비교할 키
 * @param data 비교할 값
 * @param statusKey 상태를 변경할 키
 * @returns 상태가 변경된 새 배열
 * @example
 * const items = [{ id: "1", active: true }, { id: "2", active: false }];
 * const updatedItems = toggleStatus(items, "id", "1", "active");
 * // updatedItems는 [{ id: "1", active: false }, { id: "2", active: false }]가 됨
 */
function toggleStatus<T extends { [key: string]: any }>(
  array: T[],
  key: string,
  data: string,
  statusKey: string
) {
  return array.map((item) => {
    // 주어진 조건에 맞는 객체를 찾았을 경우
    if (item[key] === data) {
      // 상태를 토글하여 새로운 객체 반환
      return { ...item, [statusKey]: !item[statusKey] };
    }
    // 조건에 맞지 않는 객체는 그대로 반환
    return item;
  });
}

const items = [
  { id: "1", active: true },
  { id: "2", active: false },
];
const updatedItems = toggleStatus(items, "id", "1", "active");

console.log(updatedItems);
