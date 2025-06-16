/**
 * 배열에서 특정 키의 값이 특정 문자열을 포함하는 항목을 필터링
 * @param arr 배열
 * @param searchKey 키
 * @param searchText 검색할 문자열
 * @returns 필터링된 배열
 * @example filterArrayText([{ name: 'John' }, { name: 'Jane' }], 'name', 'Jane') // [{ name: 'Jane' }]
 */
function filterArrayText<T extends { [key: string]: any }>(
  arr: T[],
  searchKey: keyof T,
  searchText: string
) {
  return arr.filter((item) =>
    (item[searchKey] as unknown as string)
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
}

console.log(
  filterArrayText([{ name: "John" }, { name: "Jane" }], "name", "Jane")
);
