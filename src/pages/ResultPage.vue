<style scoped></style>

<template>
  <div class="flex flex-col py-[20px] px-[24px] h-100% max-w-[1200px] mx-auto">
    <div
      class="flex flex-col gap-[3px] text-center items-center rounded-[8px] mb-[24px] bg-[linear-gradient(135deg,_#667eea_0%,_#764ba2_100%)] text-white py-[16px]"
    >
      <div class="flex gap-[3px] items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-5 fill-red-400"
        >
          <path
            d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z"
          />
        </svg>
        <span class="font-bold">최적의 만남 장소</span>
      </div>
      <span class="font-light text-[0.8rem]"
        >친구들이 만나기 가장 좋은 장소를 찾았어요!</span
      >
    </div>

    <div
      class="flex bg-[rgb(234,242,250)] px-[16px] py-[8px] gap-[10px] text-[rgb(20,52,85)] mb-[20px]"
    >
      <div class="py-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-6 text-[rgb(0,102,204)]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </div>
      <div>
        <div class="font-bold text-[18px] py-[8px]">선택된 정보</div>

        <div class="flex gap-[5px]">
          <span class="font-bold">친구들 : </span>
          <div>
            {{
              todayFriendList
                .map((friend) => `${friend.friend_name}(${friend.station_nm})`)
                .join(",")
            }}
          </div>
        </div>

        <div class="flex gap-[5px]">
          <span class="font-bold">후보 장소 : </span>
          <div>
            {{ selectedPlaceList.map((place) => place.station_nm).join(",") }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex bg-[rgb(237,247,237)] p-[20px] gap-[10px] mb-[20px] text-[rgb(30,70,32)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="size-6 text-[#2e7d32]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <div class="flex flex-col">
        <div class="flex items-center gap-[3px] mb-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-4 fill-red-400"
          >
            <path
              d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z"
            />
          </svg>
          <span class="font-bold text-[18px]">최적의 만남 장소</span>
        </div>

        <span>
          모든 친구가 가장 빠르게 모일 수 있는 장소입니다.(가장 오래 걸리는 친구
          기준 : {{ finalTime }}분)
        </span>
      </div>
    </div>

    <div
      class="flex flex-col p-[24px] bg-white rounded-[20px] shadow-md border-b-[1px] mb-[20px] border-[rgba(0,0,0,0.06)] border-[1px]"
    >
      <div class="flex gap-[15px] items-center mb-[24px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-12 bg-[#6c5ce7] fill-white p-[8px] rounded-[5px]"
        >
          <path
            fill-rule="evenodd"
            d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
            clip-rule="evenodd"
          />
        </svg>

        <div class="flex flex-col">
          <span class="text-[2rem] font-bold">{{
            finalBestStation?.station_nm
          }}</span>
          <span class="text-[0.875rem] font-light"
            >모든 친구들의 중간 지점</span
          >
        </div>
      </div>

      <div class="flex gap-[16px]">
        <div
          class="flex flex-col items-center p-[16px] gap-[10px] bg-[#f8f9ff] border-[1px] border-[#e8eaf6] rounded-[8px] flex-1"
        >
          <div class="text-[24px] text-[#6C5CE7] font-bold">
            {{ getAvg(finalPlaceRoute?.map((route) => route.time) ?? []) }}분
          </div>
          <div class="flex text-[14px] text-[#666] gap-[5px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span> 평균 이동시간 </span>
          </div>
        </div>

        <div
          class="flex flex-col items-center p-[16px] gap-[10px] bg-[#f8f9ff] border-[1px] border-[#e8eaf6] rounded-[8px] flex-1"
        >
          <div class="text-[24px] text-[#6C5CE7] font-bold">
            {{
              getAvg(finalPlaceRoute?.map((route) => route.exChange_cnt) ?? [])
            }}
          </div>
          <div class="text-[14px] text-[#666]">평균 환승 횟수</div>
        </div>

        <div
          class="flex flex-col items-center p-[16px] gap-[10px] bg-[#f8f9ff] border-[1px] border-[#e8eaf6] rounded-[8px] flex-1"
        >
          <div class="text-[24px] text-[#6C5CE7] font-bold">⭕</div>
          <div class="text-[14px] text-[#666]">이동 만족도</div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center p-[24px] bg-white rounded-[20px] shadow-md border-b-[1px] mb-[20px] border-[rgba(0,0,0,0.06)] border-[1px]"
    >
      <div class="text-[1.2rem] font-bold text-[#333] mb-[10px]">
        친구들 이동시간
      </div>

      <div class="flex gap-[1rem] flex-wrap w-full">
        <div
          v-for="route in finalPlaceRoute"
          class="flex flex-col items-center gap-[5px] p-[10px] bg-[#f8f9fa] rounded-[8px] shadow-sm flex-1"
        >
          <div class="text-[20px] text-[#6C5CE7] font-bold">
            {{ route.time }}분
          </div>
          <div class="text-[14px] text-[#666]">
            이동역 : {{ route.station_cnt }}개, 환승 :
            {{ route.exChange_cnt }}번
          </div>
          <div class="font-bold">{{ route.friend_info.friend_name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchPathStaion } from "@/apis/FetchPathApi";
import { searchStaion } from "@/apis/SearchStaionApi";
import { CalStationPathResult, Friend, StationData } from "@/model";
import { useFriendStore } from "@/stores/useFriendStore";
import { usePlaceStore } from "@/stores/usePlaceStore";
import { useTodayResultStore } from "@/stores/useTodayResultStore";
import { nextTick, onMounted, ref } from "vue";

export default {
  name: "ResultPage",
  components: {},
  setup() {
    const friendStore = useFriendStore();
    const { todayFriendList } = friendStore;

    const placeStore = usePlaceStore();
    const { selectedPlaceList } = placeStore;

    const todayResultStore = useTodayResultStore();
    const { setResultPlace } = todayResultStore;

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
            if (friend.real_cd == place.station_cd) {
              return {
                friend_info: friend,
                target_place_info: place,
                time: 0,
                station_cnt: 0,
                exChange_cnt: 0,
              };
            }

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
                ? response.exChangeInfoSet.exChangeInfo.length
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

    const getAvg = (arr: number[]) => {
      if (arr.length == 0) return 0;

      const sum = arr.reduce((a, b) => a + b, 0);

      return sum / arr.length;
    };

    return {
      todayFriendList,
      selectedPlaceList,
      finalBestStation,
      finalTime,
      finalPlaceRoute,
      getAvg,
    };
  },
};
</script>
