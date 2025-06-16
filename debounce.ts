function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number = 250
) {
  let timer: ReturnType<typeof setTimeout>; // 타이머 ID 저장
  let result: ReturnType<T>; // 마지막 결과값 저장
  return (...param: Parameters<T>) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      result = func(...param); // 전달된 함수(func)를 호출하고 그 결과를 result 에 저장
    }, wait);
    return result; // 실행된 결과를 반환
  };
}

// 디바운스된 함수 생성 (250ms 디바운스 설정)
const debounced = debounce(() => {
  console.log(`Function executed at ${new Date().toISOString()}`);
}, 250);

// 반복 호출 시작
const InterDebouce = setInterval(() => {
  console.log("called debouce function");
  debounced(); // 디바운스된 함수 호출
}, 1); // 매우 짧은 간격으로 호출

// 3초 후에 setInterval 종료 및 마지막 실행
setTimeout(() => {
  clearInterval(InterDebouce); // 3초 후 interval 중지
  console.log("3 seconds elapsed, forcing final execution...");
}, 3000); // 3초 대기
