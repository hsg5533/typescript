/**
 * 제네릭 배열을 지정된 순서에 따라 정렬하는 함수
 *
 * @template T - 제네릭 객체 타입
 * @param items - 정렬할 객체 배열
 * @param key - 정렬할 객체 속성 키
 * @param order - 정렬 순서를 정의하는 배열
 * @returns 정렬된 객체 배열
 *
 * @example
 * // 제품 데이터를 type 속성에 따라 지정된 순서대로 정렬
 * const products = [
 *   { name: "Product 1", type: "premium" },
 *   { name: "Product 2", type: "standard" },
 *   { name: "Product 3", type: "deluxe" }
 * ];
 * const order = ["standard", "deluxe", "premium"];
 * const sortedProducts = sortByOrder(products, 'type', order);
 * console.log(sortedProducts);
 *
 * @example
 * // 사용자 데이터를 level 속성에 따라 지정된 순서대로 정렬
 * const users = [
 *   { name: "Alice", level: "gold" },
 *   { name: "Bob", level: "silver" },
 *   { name: "Charlie", level: "bronze" }
 * ];
 * const order = ["bronze", "silver", "gold"];
 * const sortedUsers = sortByOrder(users, 'level', order);
 * console.log(sortedUsers);
 */
function sortByOrder<T extends { [key: string]: any }>(
  items: T[],
  key: keyof T,
  order: string[]
) {
  return items.sort(
    (a, b) => order.indexOf(a[key] as string) - order.indexOf(b[key] as string)
  );
}

const products = [
  { name: "Product 1", type: "premium" },
  { name: "Product 2", type: "standard" },
  { name: "Product 3", type: "deluxe" },
];
const order = ["standard", "deluxe", "premium"];
const sortedProducts = sortByOrder(products, "type", order);
console.log(sortedProducts);

const users = [
  { name: "Alice", level: "gold" },
  { name: "Bob", level: "silver" },
  { name: "Charlie", level: "bronze" },
];
const degree = ["bronze", "silver", "gold"];
const sortedUsers = sortByOrder(users, "level", degree);
console.log(sortedUsers);
