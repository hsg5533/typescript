/**
 * URL에서 특정 경로 추출
 * @param url URL 문자열
 * @param name 찾을 이름
 * @returns 추출된 경로
 * @example extractPathFromURL('http://example.com/image/file.PNG', 'image') // 'image/file.PNG'
 */
function extractPathFromURL(url: string, name: string) {
  const match = url.match(
    `${name.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    )}\\/([\\w-]+)\\/([\\w]+)\\.(PNG|png)`
  );
  if (match) {
    return match[0];
  } else {
    return "";
  }
}

console.log(extractPathFromURL("http://example.com/image/file.PNG", "image"));
