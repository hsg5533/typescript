/**
 * 객체 배열 내의 특정 필드가 빈 문자열인지 검사하는 함수
 * @param list 검사할 객체 배열
 * @param fields 검사할 필드 목록
 * @returns 빈 필드가 하나라도 있으면 true, 없으면 false
 * @example
 * const careerList = [
 * { start_career_time: "2020", end_career_time: "2023", text: "Engineer" },
 * { start_career_time: "", end_career_time: "2022", text: "Developer" },
 * ];
 * emptyFieldChecker(careerList, ["start_career_time", "end_career_time", "text"])
 */
function emptyFieldChecker<T extends object>(
  list: T[],
  fields: Array<keyof T>
) {
  return list.some((item) => fields.some((field) => item[field] === ""));
}

const careerList = [
  { start_career_time: "2020", end_career_time: "2023", text: "Engineer" },
  { start_career_time: "", end_career_time: "2022", text: "Developer" },
];

console.log(
  emptyFieldChecker(careerList, [
    "start_career_time",
    "end_career_time",
    "text",
  ])
);
