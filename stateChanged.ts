/**
 * 객체인지 여부를 확인하는 함수
 * @param obj 확인할 값
 * @returns 주어진 값이 객체이면 true, 아니면 false
 * @example
 * isObject({}) // true
 * isObject([]) // false
 * isObject(null) // false
 */
function isObject<T extends { [key: string]: any }>(obj: T) {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}

/**
 * 상태 변화 감지 함수: 이전 상태(prev)와 현재 상태(current)를 비교하여 변화를 반환함
 * @param prev 이전 상태 객체
 * @param current 현재 상태 객체
 * @returns 변경된 속성만 포함된 객체
 * @example
 * const prevState = { name: 'John', age: 30, hobbies: ['reading', 'gaming'] };
 * const currentState = { name: 'John', age: 31, hobbies: ['reading', 'traveling'] };
 * stateChanged(prevState, currentState) // { age: 31, hobbies: ['reading', 'traveling'] }
 */
function stateChanged<T extends { [key: string]: any }>(prev: T, current: T) {
  const changes = {} as Partial<T>;
  Object.keys(current).forEach((key) => {
    const typedKey = key as keyof T;
    const prevValue = prev[typedKey];
    const currentValue = current[typedKey];
    // 두 값이 배열일 경우 배열 요소를 비교
    if (Array.isArray(prevValue) && Array.isArray(currentValue)) {
      const arrayChanges: any[] = [];
      // 배열 길이가 다른 경우, 바로 변경된 배열로 기록
      if (prevValue.length !== currentValue.length) {
        changes[typedKey] = currentValue;
      } else {
        // 배열의 각 요소를 순회하며 객체일 경우 stateChanged로 재귀적으로 비교
        prevValue.forEach((prevItem: any, index: number) => {
          const currentItem = currentValue[index];
          if (isObject(prevItem) && isObject(currentItem)) {
            // 배열 내부 객체를 깊이 비교
            const itemChanges = stateChanged(prevItem, currentItem);
            if (Object.keys(itemChanges).length > 0) {
              arrayChanges[index] = itemChanges;
            }
          } else if (prevItem !== currentItem) {
            // 객체가 아닐 경우 단순 값 비교
            arrayChanges[index] = currentItem; // 변경된 값만 반영
          } else {
            arrayChanges[index] = prevItem; // 변경되지 않은 값 유지
          }
        });
        // 변경된 내용이 있으면 changes에 기록
        if (arrayChanges.length > 0) {
          changes[typedKey] = arrayChanges as T[keyof T];
        }
      }
    }
    // 두 값이 객체일 경우 객체 내부를 비교
    else if (isObject(prevValue) && isObject(currentValue)) {
      const nestedChanges = stateChanged(prevValue, currentValue);
      if (Object.keys(nestedChanges).length > 0) {
        changes[typedKey] = nestedChanges as T[keyof T];
      }
    }
    // 기본 값이 다를 경우 변화 기록
    else if (currentValue !== prevValue) {
      changes[typedKey] = currentValue;
    }
  });
  return changes;
}

const prevState = { name: "John", age: 30, hobbies: ["reading", "gaming"] };
const currentState = {
  name: "John",
  age: 31,
  hobbies: ["reading", "traveling"],
};
console.log(stateChanged(prevState, currentState)); // { age: 31, hobbies: ['reading', 'traveling'] }
