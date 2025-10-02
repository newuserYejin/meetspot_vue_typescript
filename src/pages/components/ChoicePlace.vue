<style scoped>
input[type="radio"]:checked + label {
  color: #6c5ce7;
  border-bottom: solid 3px #6c5ce7;
  transition: 0.05s ease all;
}
</style>

<template>
  <div class="py-[20px] px-[24px] max-w-[1200px] mx-auto">
    <div class="flex-col">
      <!-- title -->
      <div class="flex items-center gap-[10px] p-[20px] pb-[16px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-10 bg-[#6c5ce7] fill-white p-[8px] rounded-[5px]"
        >
          <path
            fill-rule="evenodd"
            d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="font-bold text-[24px] tracking-tight">
          만남 장소 후보 선택
        </div>
      </div>

      <div
        class="h-[500px] w-[100%] bg-white overflow-y-auto overflow-x-hidden flex-col rounded-[18px] border-[1px] border-[rgba(0,0,0,0.04)] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <!-- 탭 -->
        <div
          class="border-b-[rgba(0,0,0,0.06)] bg-transparent border-b-[1px] p-[20px] flex gap-[20px] items-center"
        >
          <input
            type="radio"
            value="hotPlaceTab"
            name="placeRadio"
            id="hotPlaceTab"
            class="hidden"
            v-model="selectedTab"
          />
          <label
            for="hotPlaceTab"
            class="flex items-center text-gray-600 px-[15px] py-[5px] font-bold tracking-tight min-h-[56px]"
          >
            <div>인기지역</div>
          </label>

          <input
            type="radio"
            value="searchPlaceTab"
            name="placeRadio"
            id="searchPlaceTab"
            class="hidden"
            v-model="selectedTab"
          />
          <label
            for="searchPlaceTab"
            class="flex items-center text-gray-600 px-[24px] py-[5px] font-bold tracking-tight min-h-[56px]"
          >
            <div>검색</div>
          </label>
        </div>

        <!-- 콘텐츠 영역 -->
        <div class="p-[20px] flex-col bg-transparent">
          <div class="flex gap-[15px] items-center justify-center">
            <div v-show="selectedTab == 'hotPlaceTab'">
              <div
                v-if="SUBWAY_STATIONS.length > 0"
                class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[10px]"
              >
                <div
                  v-for="item in SUBWAY_STATIONS"
                  @click="togglePlace(item)"
                  class="h-[100px] transition-all duration-300 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg-custom hover:border-[#6c5ce7] cursor-pointer ease-in-out border-[rgba(0,0,0,0.08)] border-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] rounded-[8px] p-[5px] flex flex-col items-center justify-center gap-[8px]"
                  :class="
                    selectedPlaceList.findIndex(
                      (place) =>
                        place.station_nm === item.name &&
                        place.line_num?.includes(item.line_num)
                    ) != -1
                      ? 'bg-gradient-to-br from-[#6c5ce7] to-[rgb(75,64,161)] text-white'
                      : ''
                  "
                >
                  <div
                    class="flex flex-wrap justify-center gap-[3px] font-bold text-[0.9rem] break-words"
                  >
                    <span>{{ item.name }}</span>
                    <span
                      class="text-[0.7rem] border px-[8px] rounded-[30px]"
                      :style="{
                        backgroundColor:
                          getLineColor(
                            typeof item.line_num === 'number'
                              ? item.line_num
                              : item.line_num.padStart(2, '0') + '호선'
                          ) + '15',
                        color: getLineColor(
                          typeof item.line_num === 'number'
                            ? item.line_num
                            : item.line_num.padStart(2, '0') + '호선'
                        ),
                        border:
                          '1px solid ' +
                          getLineColor(
                            typeof item.line_num === 'number'
                              ? item.line_num
                              : item.line_num.padStart(2, '0') + '호선'
                          ) +
                          '30',
                      }"
                      >{{
                        typeof item.line_num === "number"
                          ? item.line_num
                          : item.line_num + "호선"
                      }}</span
                    >
                  </div>
                  <div
                    class="flex gap-[5px] break-words flex-wrap justify-center"
                  >
                    <div
                      v-for="tag in item.tags"
                      class="text-[0.6rem] font-bold bg-[rgba(108,92,231,0.08)] text-[#6c5ce7] px-[4px] rounded-[8px]"
                      :class="
                        selectedPlaceList.findIndex(
                          (place) =>
                            place.station_nm === item.name &&
                            place.line_num?.includes(item.line_num)
                        ) != -1
                          ? 'bg-[rgba(255,255,255,0.25)] text-white'
                          : ''
                      "
                    >
                      {{ tag }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>추천장소가 없습니다</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SubwayStation } from "@/model";
import { SUBWAY_STATIONS } from "@/pages/config";
import { getLineColor } from "@/stationConfig";
import { usePlaceStore } from "@/stores/usePlaceStore";
import { ref, watch } from "vue";

export default {
  name: "",
  components: {},
  setup() {
    const selectedTab = ref("hotPlaceTab");
    const placeStore = usePlaceStore();

    const { selectedPlaceList, addPlace, deletePlace } = placeStore;

    const togglePlace = (item: SubwayStation) => {
      const idx = selectedPlaceList.findIndex(
        (place) =>
          place.station_nm === item.name &&
          place.line_num?.includes(item.line_num)
      );
      if (idx !== -1) {
        deletePlace(idx);
      } else {
        addPlace(item.name, item.line_num);
      }
    };

    watch(
      () => selectedPlaceList,
      (newVal, oldVal) => {
        console.log("selectedPlaceList newVal : ", newVal, oldVal);
      }
    );

    return {
      selectedTab,
      SUBWAY_STATIONS,
      selectedPlaceList,
      getLineColor,
      togglePlace,
    };
  },
};
</script>
