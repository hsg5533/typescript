/**
 * 주어진 한글 문자열을 초성, 중성, 종성으로 분리하여 변환합니다.
 *
 * @param {string} keyword 변환할 한글 문자열
 * @returns {string} 초성, 중성, 종성으로 분리된 문자열
 * @example
 * spreadKorean("한글"); // "ㅎㅏㄴㄱㅡㄹ"
 * spreadKorean("가");   // "ㄱㅏ"
 */
function spreadKorean(keyword: string): string {
  const initialSound = [
    0x3131, 0x3132, 0x3134, 0x3137, 0x3138, 0x3139, 0x3141, 0x3142, 0x3143,
    0x3145, 0x3146, 0x3147, 0x3148, 0x3149, 0x314a, 0x314b, 0x314c, 0x314d,
    0x314e,
  ];
  const middleSound = [
    0x314f, 0x3150, 0x3151, 0x3152, 0x3153, 0x3154, 0x3155, 0x3156, 0x3157,
    0x3158, 0x3159, 0x315a, 0x315b, 0x315c, 0x315d, 0x315e, 0x315f, 0x3160,
    0x3161, 0x3162, 0x3163,
  ];
  const lastSound = [
    0x0000, 0x3131, 0x3132, 0x3133, 0x3134, 0x3135, 0x3136, 0x3137, 0x3139,
    0x313a, 0x313b, 0x313c, 0x313d, 0x313e, 0x313f, 0x3140, 0x3141, 0x3142,
    0x3144, 0x3145, 0x3146, 0x3147, 0x3148, 0x314a, 0x314b, 0x314c, 0x314d,
    0x314e,
  ];
  const chars: number[] = [];
  const elements: string[] = [];
  for (let i = 0; i < keyword.length; i = i + 1) {
    chars[i] = keyword.charCodeAt(i);
    if (chars[i] >= 0xac00 && chars[i] <= 0xd7a3) {
      let initialPartial: number;
      let middlePartial: number;
      let lastPartial: number;
      const charOrder = chars[i] - 0xac00;
      initialPartial = charOrder / (21 * 28);
      const remainPartial = charOrder % (21 * 28);
      middlePartial = remainPartial / 28;
      lastPartial = remainPartial % 28;
      elements.push(
        String.fromCharCode(initialSound[Math.floor(initialPartial)])
      );
      switch (Math.floor(middlePartial)) {
        case 9:
          elements.push("ㅗㅏ");
          break;
        case 10:
          elements.push("ㅗㅐ");
          break;
        case 11:
          elements.push("ㅗㅣ");
          break;
        case 14:
          elements.push("ㅜㅓ");
          break;
        case 15:
          elements.push("ㅜㅔ");
          break;
        case 16:
          elements.push("ㅜㅣ");
          break;
        case 19:
          elements.push("ㅡㅣ");
          break;
        default:
          elements.push(
            String.fromCharCode(middleSound[Math.floor(middlePartial)])
          );
      }
      if (lastPartial !== 0x0000) {
        switch (Math.floor(lastPartial)) {
          case 3:
            elements.push("ㄱㅅ");
            break;
          case 5:
            elements.push("ㄴㅈ");
            break;
          case 6:
            elements.push("ㄴㅎ");
            break;
          case 9:
            elements.push("ㄹㄱ");
            break;
          case 10:
            elements.push("ㄹㅁ");
            break;
          case 11:
            elements.push("ㄹㅂ");
            break;
          case 12:
            elements.push("ㄹㅅ");
            break;
          case 13:
            elements.push("ㄹㅌ");
            break;
          case 14:
            elements.push("ㄹㅍ");
            break;
          case 15:
            elements.push("ㄹㅎ");
            break;
          case 18:
            elements.push("ㅂㅅ");
            break;
          default:
            elements.push(
              String.fromCharCode(lastSound[Math.floor(lastPartial)])
            );
        }
      }
    } else {
      elements.push(String.fromCharCode(chars[i]));
    }
  }
  return elements.join("");
}

console.log(spreadKorean("한글"));
