/**
 * 배열에서 특정 키의 값이 특정 값과 일치하는 항목의 개수를 반환
 * @param array 객체 배열
 * @param key 검색할 키 (속성 이름)
 * @param value 검색할 값
 * @returns 조건에 맞는 항목의 개수
 * @example
 * const data = [
 *   { name: 'John', age: 30 },
 *   { name: 'Jane', age: 25 },
 *   { name: 'John', age: 40 }
 * ];
 * getLength(data, 'name', 'John') // 2
 */
function getLength<T extends { [key: string]: any }>(
  array: T[],
  key: string,
  value: any
) {
  let count = 0;
  for (const item of array) {
    if (item[key] === value) {
      count++;
    }
  }
  return count;
}

console.log(
  getLength(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "John", age: 40 },
    ],
    "name",
    "John"
  )
);
