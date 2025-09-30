<style scoped></style>

<template>
  <div>결과 페이지</div>
</template>

<script lang="ts">
import { fetchPathStaion } from "@/apis/FetchPathApi";
import { searchStaion } from "@/apis/SearchStaionApi";
import { CalStationPathResult, Friend, StationData } from "@/model";
import { useFriendStore } from "@/stores/useFriendStore";
import { usePlaceStore } from "@/stores/usePlaceStore";
import { useTodayResultStore } from "@/stores/useTodayResultStore";
import { nextTick, onMounted, reactive, ref } from "vue";

export default {
  name: "ResultPage",
  components: {},
  setup() {
    const friendStore = useFriendStore();
    const { todayFriendList } = friendStore;

    const placeStore = usePlaceStore();
    const { selectedPlaceList } = placeStore;

    const todayResultStore = useTodayResultStore();
    const { todayResult, setResultPlace } = todayResultStore;

    const allCalStaionResult = ref<CalStationPathResult[]>([]);
    const finalBestStation = ref<StationData | null>(null);
    const finalTime = ref<number>(0);
    const finalPlaceRoute = ref<CalStationPathResult[] | null>(null);

    // 만남 후보지 지하철 코드 알아오기
    const getStationInfo = async (station_nm: string, line_num: string) => {
      const result = await searchStaion(station_nm, line_num);
      const stationCode = result[0].stationID;
      return stationCode;
    };

    // 참여자 별 각 후보지까지의 걸리는 시간 측정
    const getStartEndTime = async (
      friendList: Friend[],
      placeList: StationData[]
    ) => {
      for (const place of placeList) {
        const calResult: CalStationPathResult[] = await Promise.all(
          friendList.map(async (friend: Friend) => {
            const response = await fetchPathStaion(
              friend.real_cd ?? "",
              place.station_cd ?? ""
            );

            return {
              friend_info: friend,
              target_place_info: place,
              time: response.globalTravelTime,
              station_cnt: response.globalStationCount,
              exChange_cnt: response.exChangeInfoSet
                ? response.exChangeInfoSet.length
                : 0,
            };
          })
        );

        allCalStaionResult.value.push(...calResult);
      }
    };

    // 최적의 만남 장소 계산
    const selectBestSpot = (calData: CalStationPathResult[]) => {
      let bestStation = null;
      let minMaxTime = Infinity;
      let bestPlaceRoute = null;

      for (const place of selectedPlaceList) {
        const filteredList = calData.filter(
          (data) => data.target_place_info.station_cd == place.station_cd
        );

        const calTimes = filteredList.map((data) => data.time);

        if (calTimes.length > 0) {
          const maxTime = Math.max(...calTimes);

          if (maxTime < minMaxTime) {
            minMaxTime = maxTime;
            bestStation = place;
            bestPlaceRoute = filteredList;
          }
        }
      }

      return { bestStation, minMaxTime, bestPlaceRoute };
    };

    // 컴포넌트가 마운트된 직후 실행할 코드
    onMounted(async () => {
      await Promise.all([
        // 후보지 station ID 세팅
        ...selectedPlaceList.map(async (station: StationData) => {
          const stationCd: string = await getStationInfo(
            station.station_nm,
            station.line_num ?? ""
          );

          station.station_cd = stationCd;
        }),

        // 친구 출발지 실제 station id 세팅 (odsay기준)
        ...todayFriendList.map(async (friend: Friend, index) => {
          const lineNum = friend.line_num?.includes("호선")
            ? String(Number(friend.line_num.split("호선")[0]))
            : friend.line_num;

          const stationCd: string = await getStationInfo(
            friend.station_nm,
            lineNum ?? ""
          );

          friend.real_cd = stationCd;
        }),
      ]);

      await nextTick();

      await getStartEndTime(todayFriendList, selectedPlaceList);

      const { bestStation, minMaxTime, bestPlaceRoute } = selectBestSpot(
        allCalStaionResult.value
      );

      finalBestStation.value = bestStation;
      finalTime.value = minMaxTime;
      finalPlaceRoute.value = bestPlaceRoute;

      setResultPlace(finalBestStation.value?.station_nm ?? "역삼");
    });

    return {
      todayResult,
      setResultPlace,
      finalBestStation,
      finalTime,
      finalPlaceRoute,
    };
  },
};
</script>
