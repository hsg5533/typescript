/**
 * 두 배열을 병합하고, 특정 키로 중복을 제거
 * @param arr1 첫 번째 배열
 * @param arr2 두 번째 배열
 * @param key 중복을 제거할 키
 * @returns 병합된 배열
 * @example mergeArrayObject([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], 'id') // [{ id: 1 }, { id: 2 }, { id: 3 }]
 */
function mergeArrayObject<T extends { [key: string]: any }, K extends keyof T>(
  arr1: T[],
  arr2: T[],
  key: K
) {
  const map = new Map<T[K], T>(arr1.map((item) => [item[key], item]));
  arr2.forEach((item) => map.set(item[key], item));
  return Array.from(map.values());
}

console.log(
  mergeArrayObject([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], "id")
);
