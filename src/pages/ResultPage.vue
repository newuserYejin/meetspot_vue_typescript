<style scoped></style>

<template>
  <div>결과 페이지</div>
</template>

<script lang="ts">
import { searchStaion } from "@/apis/SearchStaionApi";
import { StationData } from "@/model";
import { useFriendStore } from "@/stores/useFriendStore";
import { usePlaceStore } from "@/stores/usePlaceStore";
import { useTodayResultStore } from "@/stores/useTodayResultStore";
import { nextTick, onMounted } from "vue";

export default {
  name: "ResultPage",
  components: {},
  setup() {
    const todayResultStore = useTodayResultStore();
    const friendStore = useFriendStore();
    const { todayFriendList } = friendStore;

    const placeStore = usePlaceStore();
    const { selectedPlaceList, setStationCode } = placeStore;

    const { todayResult, setResultPlace } = todayResultStore;

    // 만남 후보지 지하철 코드 알아오기
    const getStationInfo = async (
      station_nm: string,
      line_num: string,
      index: number
    ) => {
      const result = await searchStaion(station_nm, line_num);
      const stationCode = result[0].stationID;

      setStationCode(stationCode, index);
    };

    const getTime = (data) => {
      console.log("받은 data : ", data);
    };

    // 컴포넌트가 마운트된 직후 실행할 코드
    onMounted(async () => {
      setResultPlace("역삼");
      console.log("todayFriendList : ", todayFriendList);
      console.log("selectedPlaceList : ", selectedPlaceList);

      await Promise.all(
        selectedPlaceList.map(async (station: StationData, index: number) => {
          await getStationInfo(
            station.station_nm,
            station.line_num ?? "",
            index
          );
        })
      );

      await nextTick();

      getTime(selectedPlaceList);
    });

    return {
      todayResult,
      setResultPlace,
    };
  },
};
</script>
