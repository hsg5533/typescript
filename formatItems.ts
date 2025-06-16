/**
 * 번호로 나열된 항목을 포맷
 * @param inputString 번호가 있는 항목 리스트 문자열
 * @returns 포맷된 문자열
 * @example formatItems('1. item1 2. item2') // '1. item1\n2. item2'
 */
function formatItems(inputString: string) {
  return inputString
    .split(/(?=\d+\.\s)/)
    .map((item) => item.trim())
    .join("\n");
}

console.log(formatItems("1. item1 2. item2"));
