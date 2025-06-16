/**
 * 객체 내에서 문자열로 구성된 배열을 찾고, 결과를 경로와 값으로 반환합니다.
 *
 * @param {Record<string, any>} object - 탐색할 객체.
 * @param {(key: string, value: any) => boolean} predicate - 검색 조건을 결정하는 함수.
 * @returns {Map<string[], any>} 검색 조건을 만족하는 경로와 값을 포함한 Map 객체.
 * @example
 * // 예시 객체
 * const exampleObject = {
 *   user: {
 *     name: "John",
 *     age: 30,
 *     address: {
 *       city: "Seoul",
 *       zip: "12345",
 *     },
 *   },
 *   items: ["apple", "banana", "cherry"],
 * };
 *
 * // 조건에 맞는 문자열 배열을 찾기 위한 predicate 함수
 * const isStringArray = (key: string, value: any) => Array.isArray(value) && value.every(item => typeof item === 'string');
 *
 * // find 함수를 호출하여 결과를 확인합니다.
 * const result = find(exampleObject, isStringArray);
 * console.log(result); // Map(1) { ['items'] => ['apple', 'banana', 'cherry'] }
 */
function find(
  object: Record<string, any>,
  predicate: (key: string, value: any) => boolean
): Map<string[], any> {
  const result = new Map<string[], any>();
  const stack: { path: string[]; obj: Record<string, any>; depth: number }[] = [
    { path: [], obj: object, depth: 0 },
  ];
  while (stack.length > 0) {
    const { path, obj } = stack.pop()!;
    for (const key of Object.getOwnPropertyNames(obj)) {
      const childPath = [...path, key];
      const value = obj[key];
      if (predicate(key, value)) {
        result.set(childPath, value);
      }
      if (value instanceof Object && !Array.isArray(value)) {
        stack.push({ path: childPath, obj: value, depth: path.length + 1 });
      }
    }
  }
  return result;
}

// 예시 객체
const exampleObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "traveling", "cooking"],
  favoriteNumbers: [1, 2, 3],
  favoriteFoods: ["pizza", "sushi", "burger"],
};

// 문자열 배열을 찾는 조건으로 함수 호출
const resultMap = find(
  exampleObject,
  (key, value) =>
    Array.isArray(value) && value.every((item) => typeof item === "string")
);

// 결과 확인
resultMap.forEach((value, key) => console.log("Path:", key, "Value:", value));

// 회원가입 폼 데이터 예시
const signUpData = {
  username: "JohnDoe",
  password: "",
  email: "johndoe@example.com",
  confirmPassword: "password123",
  address: {
    street: "",
    city: "New York",
    state: "NY",
  },
};

// 빈 값을 체크하는 조건으로 함수 호출
const emptyFields = find(
  signUpData,
  (key, value) => typeof value === "string" && value.trim() === ""
);

// 결과 확인 및 문구 출력
emptyFields.forEach((value, key) =>
  console.log(`"${key}" 필드에 해당 데이터가 없습니다.`)
);
