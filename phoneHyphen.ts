/**
 * 전화번호를 하이픈(-) 형식으로 변환하는 함수
 * @param phoneNumber 변환할 전화번호 문자열
 * @returns 하이픈이 추가된 전화번호 문자열
 * @example
 * const formattedNumber = getPhoneNumberWithHyphen("01012345678"); // "010-1234-5678"
 */
function getPhoneNumberWithHyphen(phoneNumber: string) {
  // 숫자가 아닌 모든 문자를 제거하여 전화번호에서 숫자만 남김
  let number = phoneNumber.replace(/[^0-9]/g, "");
  let phone = "";
  // 전화번호 길이에 따라 하이픈 추가
  if (number.length < 4) {
    return number; // 4자리 미만의 경우 원래 숫자 반환
  } else if (number.length < 7) {
    // 4자리 이상 7자리 미만인 경우
    phone += number.substring(0, 3); // 앞 3자리
    phone += "-"; // 앞 3자리와 나머지 부분을 구분하기 위해 하이픈 추가
    phone += number.substring(3); // 나머지 부분
  } else if (number.length < 11) {
    // 7자리 이상 11자리 미만인 경우
    phone += number.substring(0, 3); // 앞 3자리
    phone += "-"; // 앞 3자리와 다음 3자리 부분을 구분하기 위해 하이픈 추가
    phone += number.substring(3, 6); // 다음 3자리
    phone += "-"; // 다음 3자리와 나머지 부분을 구분하기 위해 하이픈 추가
    phone += number.substring(6); // 나머지 부분
  } else {
    // 11자리 이상인 경우
    phone += number.substring(0, 3); // 앞 3자리
    phone += "-"; // 앞 3자리와 다음 4자리 부분을 구분하기 위해 하이픈 추가
    phone += number.substring(3, 7); // 다음 4자리
    phone += "-"; // 다음 4자리와 나머지 부분을 구분하기 위해 하이픈 추가
    phone += number.substring(7); // 나머지 부분
  }
  return phone; // 하이픈이 추가된 전화번호 반환
}

const formatNumber = getPhoneNumberWithHyphen("01012345678");
console.log(formatNumber);
