import { PlaceItem } from "@/model";

export const fetchPlace = async (
  location: string,
  keyword: string,
  size: number
): Promise<PlaceItem[]> => {
  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${location} ${keyword}&size=${size}`,
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
        },
      }
    );

    const data = await response.json();
    return data.documents;
  } catch (error) {
    console.error("장소 검색 실패:", error);
    return [];
  }
};
