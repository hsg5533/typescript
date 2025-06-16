function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  delay: number
) {
  let last = 0;
  let timer: ReturnType<typeof setTimeout>;
  let result: ReturnType<T>;
  return (...param: Parameters<T>) => {
    const now = Date.now();
    const wait = delay - (now - last);
    if (wait <= 0) {
      last = now;
      result = func(...param);
      timer && clearTimeout(timer);
      return result;
    }
    if (!timer) {
      timer = setTimeout(() => {
        last = Date.now();
        result = func(...param);
      }, wait);
    }
    return result;
  };
}

// 스로틀된 함수 바로 반환 (250ms 스로틀 설정)
const throttled = throttle(() => {
  console.log(`${new Date().toISOString()}`);
}, 250);

// 반복 호출 시작
const interThrottle = setInterval(() => {
  console.log("called throttle function");
  throttled(); // 스로틀된 함수 호출
}, 1); // 매우 짧은 간격으로 호출

// 3초 후에 setInterval 종료 및 마지막 실행
setTimeout(() => {
  clearInterval(interThrottle); // 3초 후 interval 중지
  console.log("3 seconds elapsed, forcing final execution...");
}, 3000); // 3초 대기
