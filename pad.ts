/**
 * 문자열을 왼쪽 또는 오른쪽으로 채움
 * @param str 대상 문자열
 * @param len 채울 길이
 * @param ch 채울 문자
 * @param dir 'left' 또는 'right'
 * @returns 채워진 문자열
 * @example pad('123', 5, '0', 'left') // '00123'
 */
function pad(str: string, len: number, ch: string, dir: "left" | "right") {
  let pad = "";
  if (len <= 0) return str;
  if (!ch && ch !== "0") ch = " ";
  ch = ch + "";
  if (ch === " " && len < 10) {
    pad = "          ".substring(0, len);
  } else {
    while (len > 0) {
      if (len & 1) pad += ch;
      len >>= 1;
      if (len) ch += ch;
    }
  }
  if (dir === "left") {
    return pad + str;
  }
  if (dir === "right") {
    return str + pad;
  }
  return 'Invalid direction. Use "left", "right"';
}

console.log(pad("123", 5, "0", "left"));
