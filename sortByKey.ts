/**
 * 제네릭 배열을 특정 속성 기준으로 정렬하는 함수
 *
 * @template T - 제네릭 객체 타입
 * @param items - 정렬할 객체 배열
 * @param key - 정렬할 객체 속성 키
 * @param isAscending - 오름차순 여부 (기본값은 true)
 * @returns 정렬된 객체 배열
 *
 * @example
 * // 비용 데이터를 cost 속성으로 오름차순 정렬
 * const costs = [
 *   { cost: "17000", detail: "7km", etc: "", keyword: "배달" },
 *   { cost: "15000", detail: "5km", etc: "", keyword: "배달" },
 * ];
 * const sortedCosts = sortByKey(costs, 'cost');
 * console.log(sortedCosts);
 *
 * @example
 * // 헬퍼 데이터를 helperMeter 속성으로 오름차순 정렬
 * const helpers = [
 *   { helperNickName: "프리메라", helperMeter: 4391, helperGrade: 2 },
 *   { helperNickName: "여꽁이", helperMeter: 8655, helperGrade: 1 },
 * ];
 * const sortedHelpersByMeter = sortByKey(helpers, 'helperMeter');
 * console.log(sortedHelpersByMeter);
 *
 * @example
 * // 헬퍼 데이터를 helperGrade 속성으로 내림차순 정렬
 * const sortedHelpersByGrade = sortByKey(helpers, 'helperGrade', false);
 * console.log(sortedHelpersByGrade);
 */
function sortByKey<T extends { [key: string]: any }>(
  items: T[],
  key: keyof T,
  isAscending: boolean = true
) {
  return items.sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];
    // 숫자 혹은 문자열 값을 비교
    const parsedA =
      typeof valueA === "string"
        ? parseInt(valueA as string)
        : (valueA as number);
    const parsedB =
      typeof valueB === "string"
        ? parseInt(valueB as string)
        : (valueB as number);

    if (isNaN(parsedA) || isNaN(parsedB)) {
      // 숫자로 변환되지 않는 값은 0으로 처리
      return isAscending ? 1 : -1;
    }
    return isAscending ? parsedA - parsedB : parsedB - parsedA;
  });
}

const costs = [
  { cost: "17000", detail: "7km", etc: "", keyword: "배달" },
  { cost: "15000", detail: "5km", etc: "", keyword: "배달" },
];
const sortedCosts = sortByKey(costs, "cost");
console.log(sortedCosts);

const helpers = [
  { helperNickName: "프리메라", helperMeter: 4391, helperGrade: 2 },
  { helperNickName: "여꽁이", helperMeter: 8655, helperGrade: 1 },
];
const sortedHelpersByMeter = sortByKey(helpers, "helperMeter");
console.log(sortedHelpersByMeter);

const sortedHelpersByGrade = sortByKey(helpers, "helperGrade", false);
console.log(sortedHelpersByGrade);
