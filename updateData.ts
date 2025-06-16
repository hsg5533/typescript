/**
 * 객체의 배열을 업데이트하거나 새로운 항목을 추가합니다.
 *
 * @template T - 제네릭 객체 타입.
 * @param object - 타겟 배열을 포함하는 원본 객체.
 * @param change - 타겟 배열에 추가할 변경 사항.
 * @param target - 객체 내 타겟 배열의 키.
 * @param key - 타겟 배열의 항목 중 업데이트하거나 추가할 항목의 키.
 * @returns 업데이트된 타겟 배열을 포함하는 새로운 객체.
 *
 * @example
 * const examData = { exam: [{ exam1: "data" }] };
 * const insertData = { exam2: "data2" };
 * const updated = updateData(
 *   examData,
 *   insertData,
 *   "exam",
 *   Object.keys(insertData)[0]
 * );
 * // updated는 { exam: [{ exam1: "data" }, { exam2: "data2" }] }로 반환됩니다.
 */
function updateData<T extends { [key: string]: any }>(
  object: T,
  change: { [key: string]: any },
  target: string,
  key: string
) {
  const existingItemIndex = object[target].findIndex(
    (item: T) => Object.keys(item)[0] === key
  );
  if (existingItemIndex === -1) {
    return {
      ...object,
      [target]: [...object[target], change],
    };
  } else {
    const updated = [...object[target]];
    updated[existingItemIndex] = { [key]: change[key] };
    return {
      ...object,
      [target]: updated,
    };
  }
}

const examData = { exam: [{ exam1: "data" }] };
const insertData = { exam2: "data2" };
const updated = updateData(
  examData,
  insertData,
  "exam",
  Object.keys(insertData)[0]
);
