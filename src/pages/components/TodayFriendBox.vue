<style scoped></style>

<template>
  <div class="py-[20px] px-[24px] h-100% max-w-[1200px] mx-auto">
    <div class="flex-col">
      <!-- title -->
      <div class="flex items-center gap-[10px] p-[20px] pb-[16px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-10 bg-[#d63384] fill-white p-[8px] rounded-[5px]"
        >
          <path
            fill-rule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
            clip-rule="evenodd"
          />
          <path
            d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"
          />
        </svg>
        <div class="font-bold text-[24px] tracking-tight">오늘 만날 친구</div>
      </div>

      <div
        class="h-[500px] w-[100%] bg-white overflow-y-auto overflow-x-hidden flex-col rounded-[18px] border-[1px] border-[rgba(0,0,0,0.04)] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <!-- 탭 -->
        <div
          class="border-b-[rgba(0,0,0,0.06)] bg-transparent border-b-[1px] p-[20px]"
        >
          <div
            class="text-[#9c27b0] border-b-[#9c27b0] border-b-[3px] font-bold cursor-pointer w-fit text-[0.95em] px-[24px] py-[16px] min-h-[56px]"
          >
            <div>친구 추가</div>
          </div>
        </div>

        <!-- 콘텐츠 영역 -->
        <div class="p-[20px] flex-col bg-transparent">
          <div class="flex gap-[15px] items-center">
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                  />
                  <path
                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="border border-gray-300 bg-transparent text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="ex) 길동이"
                v-model="friendName"
              />
            </div>

            <div class="relative w-full">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-4 fill-gray-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="ex) 홍대입구"
                v-model="searchStation"
                @input="filterStationFn(searchStation)"
              />

              <div
                class="absolute inset-y-0 end-2 flex items-center ps-3.5 cursor-pointer hover:text-gray-600"
                v-show="searchStation && searchStation.trim() != ''"
                @click="
                  () => {
                    searchStation = '';
                    filteredStations = [];
                    selectedStation = null;
                  }
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <ui
                v-show="filteredStations.length > 0"
                class="absolute shadow-lg w-full mt-[5px] z-3 bg-white rounded-b-[8px] list-none"
              >
                <li
                  class="cursor-pointer hover:bg-[#f5f5f5] p-[10px] flex justify-between border-b-[1px] border-b-[rgba(0,0,0,0.06)]"
                  v-for="item in filteredStations"
                  :key="item.station_cd + item.line_num"
                  @click="handleStationSelect(item)"
                >
                  <div class="flex items-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-4 fill-gray-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div class="font-bold text-[0.8rem] text-gray-600">
                      {{ item.station_nm }}
                    </div>
                  </div>
                  <div
                    class="text-[0.7rem] border px-[8px] rounded-[30px]"
                    :style="{
                      backgroundColor: getLineColor(item.line_num) + '15',
                      color: getLineColor(item.line_num),
                      border: '1px solid ' + getLineColor(item.line_num) + '30',
                    }"
                  >
                    {{ item.line_num }}
                  </div>
                </li>
              </ui>
            </div>

            <button
              class="font-bold bg-[#d63384] text-white h-[100%] w-[35%] p-[8px] rounded-[8px] cursor-pointer hover:bg-[#cc317e] flex items-center justify-center gap-[10px] disabled:bg-gray-300 disabled:text-gray-400"
              :disabled="friendName.trim() == '' || null == selectedStation"
              @click="addFriend"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4 fill-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>

              추가
            </button>
          </div>

          <!-- 친구 목록 -->
          <div>
            <div
              class="my-[15px] text-[0.8rem] text-gray-600 font-bold"
              v-show="todayFriendList.length > 0"
            >
              추가된 친구 ({{ todayFriendList.length }}명)
            </div>

            <div class="flex-col">
              <div
                v-for="(friend, index) in todayFriendList"
                class="shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex px-[16px] py-[10px] border border-[rgba(0,0,0,0.06)] mb-[12px] rounded-[12px] text-[#333] gap-[30px] items-center"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-5 fill-gray-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="flex flex-col py-[8px]">
                  <div class="font-bold text-[0.9rem]">
                    {{ friend.friend_name }}
                  </div>
                  <div class="flex gap-[5px] items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-4 fill-gray-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div class="text-[0.75rem] text-gray-500">
                      {{ friend.station_nm }}
                    </div>
                  </div>
                </div>
                <button
                  @click="deleteFriend(index)"
                  class="ml-auto cursor-pointer p-[3px] rounded-[50%] hover:bg-red-300 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4 fill-gray-700 hover:fill-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Friend, StationData } from "@/model";
import { getLineColor, STATION_CONFIG } from "@/stationConfig";
import { useFriendStore } from "@/stores/useFriendStore";
import { ref } from "vue";

export default {
  name: "TodayFriendBox",
  components: {},
  setup() {
    const searchStation = ref<string>("");
    const selectedStation = ref<StationData | null>(null);
    const friendName = ref<string>("");
    const filteredStations = ref<StationData[]>([]);

    // pinia store에서 가져오기
    const friendStore = useFriendStore();
    const todayFriendList = friendStore.todayFriendList;

    // 지하철 역 필터링
    const filterStationFn = (searchStation: string): void => {
      if (searchStation.trim() != "") {
        const filteredResult = STATION_CONFIG.DATA.filter(
          (station: StationData) =>
            station.station_nm
              .toLowerCase()
              .includes(searchStation.toLowerCase()) ||
            station.line_num.includes(searchStation)
        ).slice(0, 8);

        filteredStations.value = filteredResult;
      } else {
        filteredStations.value = [];
      }
    };

    const handleStationSelect = (station: StationData) => {
      const displayText = `${station.station_nm} (${station.line_num})`;
      searchStation.value = displayText;
      selectedStation.value = station;
      filteredStations.value = [];
    };

    const addFriend = () => {
      if (friendName && null != selectedStation) {
        const friendInfo = {
          friend_name: friendName.value,
          station_cd: selectedStation.value?.station_cd || "",
          station_nm: selectedStation.value?.station_nm || "",
          line_num: selectedStation.value?.line_num || "",
          fr_code: selectedStation.value?.fr_code || "",
        };

        friendStore.addFriend(friendInfo);
        searchStation.value = "";
        selectedStation.value = null;
        friendName.value = "";
      }
    };

    const deleteFriend = (index: number) => {
      friendStore.deleteFriend(index);
    };

    return {
      searchStation,
      filterStationFn,
      filteredStations,
      getLineColor,
      handleStationSelect,
      selectedStation,
      friendName,
      todayFriendList,
      addFriend,
      deleteFriend,
    };
  },
};
</script>
