export const fetchPathStaion = async (startID: string, endID: string) => {
  try {
    const url = new URL(
      "https://api.odsay.com/v1/api/subwayPath?lang=0&CID=1000"
    );

    // 쿼리 파라미터 추가
    url.searchParams.set("SID", startID);
    url.searchParams.set("EID", endID);
    url.searchParams.set("apiKey", import.meta.env.VITE_ODSAY_API_KEY);

    const response = await fetch(url);

    const data = await response.json();

    console.log("출발지 : ", startID, " 도착지 : ", endID, " 경로 : ", data);
    return data.result;
  } catch (error) {
    console.error("지하철 경로 검색 실패:", error);
  }
};
