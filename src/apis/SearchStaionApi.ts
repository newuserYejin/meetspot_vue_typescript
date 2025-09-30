import { SearchStationResult } from "@/model";

export const searchStaion = async (
  keyword: string,
  line_num: string
): Promise<SearchStationResult[]> => {
  try {
    const url = new URL(
      "https://api.odsay.com/v1/api/searchStation?lang=0&CID=1000&stationClass=2"
    );

    // 쿼리 파라미터 추가
    url.searchParams.set("stationName", keyword);
    url.searchParams.set("apiKey", import.meta.env.VITE_ODSAY_API_KEY);

    const response = await fetch(url);

    const data = await response.json();

    if (data.result?.station.length > 1) {
      return data.result?.station.filter((data: SearchStationResult) =>
        data.laneName.includes(line_num)
      );
    } else {
      return data.result?.station;
    }
  } catch (error) {
    console.error("지하철 역 코드 검색 실패:", error);
    return [];
  }
};
