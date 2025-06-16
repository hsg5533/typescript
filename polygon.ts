// 타입 정의
interface Feature {
  type: string;
  properties: {
    adm_nm: string;
    adm_cd2: string;
    sgg: string;
    sido: string;
    sidonm: string;
    sggnm: string;
    adm_cd: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
}

interface Point {
  x: number;
  y: number;
}

// 거리 계산
function dist(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371; // 지구 반지름 (km)
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// 중심 좌표 계산
function centroid(pts: Point[]): { lat: number; lng: number } {
  let x = 0;
  let y = 0;
  let area = 0;
  if (pts.length === 2) {
    return {
      lat: (pts[0].x + pts[1].x) / 2,
      lng: (pts[0].y + pts[1].y) / 2,
    };
  }
  pts.forEach((cur, i, arr) => {
    const prev = arr[i === 0 ? arr.length - 1 : i - 1];
    const a = cur.y * prev.x - prev.y * cur.x;
    x += (cur.x + prev.x) * a;
    y += (cur.y + prev.y) * a;
    area += a;
  });
  return { lat: x / (3 * area), lng: y / (3 * area) };
}

// 필터링
function filter(features: Feature[], lat: number, lng: number, radius: number) {
  return features
    .map((feature) => {
      const pts: Point[] = [];
      const { geometry: g, properties: p } = feature;
      if (g.type === "Polygon") {
        g.coordinates[0].forEach(([lng, lat]) => pts.push({ x: lat, y: lng }));
      } else if (g.type === "MultiPolygon") {
        (g.coordinates as number[][][][]).forEach((poly) => {
          poly[0].forEach(([lng, lat]) => pts.push({ x: lat, y: lng }));
        });
      }
      if (pts.length === 0) {
        return null;
      }
      return { locate: centroid(pts), region: p.adm_nm };
    })
    .filter(
      (r) => r !== null && dist(lat, lng, r.locate.lat, r.locate.lng) <= radius
    );
}

// 예시 좌표 및 반경
const lat = 37.5665;
const lng = 126.978;
const radius = 1;

// 데이터 로드 및 필터 실행
fetch("https://hsg5533.github.io/hang-jeong-dong/json/ver20250401.json")
  .then((res) => res.json())
  .then((data) => {
    const regions = filter(data.features, lat, lng, radius);
    console.log(regions.map((r) => r.region));
  })
  .catch((err) => {
    if (err instanceof Error) {
      console.error("데이터 불러오기 중 오류:", err.message);
    }
  });
