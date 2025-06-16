/**
 * 닉네임의 유효성을 검사하는 함수
 * @param nickname 검사할 닉네임 문자열
 * @returns 유효하지 않으면 에러 메시지, 유효하면 "닉네임 통과"
 * @example
 * nicknameChecker("한글닉네임한글가나다라마바사") // "10자 이상"
 * nicknameChecker("닉@ 네임") // "유효하지 않음"
 * nicknameChecker("닉네임") // "닉네임 통과"
 */
function nicknameChecker(nickname: string) {
  if (nickname.indexOf(" ") !== -1) {
    return "공백 존재";
  } else if (nickname.length > 10) {
    return "10자 이상";
  } else if (!/^[가-힣 1-9]*$/.test(nickname)) {
    return "유효하지 않음";
  } else {
    return "닉네임 통과";
  }
}
