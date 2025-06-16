/**
 * 주어진 `items` 배열을 기준으로 `activeItems` 배열의 상태를 업데이트합니다.
 * `items`에 존재하지만 `activeItems`에 없는 항목은 새로운 객체로 추가되고,
 * 해당 항목의 상태는 `false`로 설정됩니다.
 *
 * @template T - `activeItems` 객체의 문자열 속성 키 타입.
 * @template U - `activeItems` 객체의 상태를 나타내는 불리언 속성 키 타입.
 * @param {string[]} items - 비교 대상이 되는 문자열 배열.
 * @param {Array<{ [K in T]: string } & { [S in U]: boolean }>} activeItems -
 *        활성화된 항목들의 배열로, 문자열 키와 불리언 상태를 포함합니다.
 * @param {T} key - `activeItems`에서 값을 비교할 문자열 속성 키.
 * @param {U} statusKey - `activeItems`에서 상태를 나타낼 불리언 속성 키.
 * @returns {Array<{ [K in T]: string } & { [S in U]: boolean }>}
 *          업데이트된 객체 배열로, 누락된 항목은 추가되며 상태는 `false`로 설정됩니다.
 *
 * @example
 * // 예제 1: 기본 사용
 * const items = ["apple", "banana", "cherry"];
 * const activeItems = [
 *   { name: "apple", isActive: true },
 *   { name: "banana", isActive: true },
 * ];
 * const result = updateStatus(items, activeItems, "name", "isActive");
 * console.log(result);
 * // 출력:
 * // [
 * //   { name: "apple", isActive: true },
 * //   { name: "banana", isActive: true },
 * //   { name: "cherry", isActive: false },
 * // ]
 *
 * @example
 * // 예제 2: 다른 키 사용
 * const items = ["dog", "cat"];
 * const activeItems = [
 *   { type: "dog", selected: true },
 * ];
 * const result = updateStatus(items, activeItems, "type", "selected");
 * console.log(result);
 * // 출력:
 * // [
 * //   { type: "dog", selected: true },
 * //   { type: "cat", selected: false },
 * // ]
 */
function updateStatus<T extends string, U extends string>(
  items: string[],
  activeItems: Array<{ [K in T]: string } & { [S in U]: boolean }>,
  key: T,
  statusKey: U
): Array<{ [K in T]: string } & { [S in U]: boolean }> {
  // activeItems에서 key에 해당하는 값들을 추출하여 string[] 타입으로 설정
  const activeItemValues: string[] = activeItems.map((item) => item[key]);
  const result: Array<{ [K in T]: string } & { [S in U]: boolean }> = [
    ...activeItems,
  ];
  items.forEach((item) => {
    // item이 activeItemValues에 포함되어 있지 않다면 새로운 객체를 추가
    if (!activeItemValues.includes(item)) {
      // result에 새로운 객체를 추가할 때, 타입을 명시적으로 지정
      result.push({ [key]: item, [statusKey]: false } as {
        [K in T]: string;
      } & { [S in U]: boolean });
    }
  });
  return result;
}

// 사용 예제
const areas = [
  "서울",
  "경기도",
  "인천",
  "세종",
  "대전",
  "충북",
  "충남",
  "전북",
  "전남",
  "광주",
  "강원",
  "경북",
  "경남",
  "대구",
  "울산",
  "부산",
  "제주",
];

const activeRegions = [
  { region: "경기도", regionStatus: true },
  { region: "대구", regionStatus: true },
  { region: "광주", regionStatus: true },
];

// areas 예제 호출
const updatedRegions = updateStatus(
  areas,
  activeRegions,
  "region",
  "regionStatus"
);

console.log(updatedRegions);
