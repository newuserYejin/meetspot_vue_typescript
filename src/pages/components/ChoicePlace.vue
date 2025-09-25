<style scoped>
input[type="radio"]:checked + label {
  color: #6c5ce7;
  border-bottom: solid 3px #6c5ce7;
  transition: 0.05s ease all;
}
</style>

<template>
  <div class="py-[20px] px-[24px] h-100% max-w-[1200px] mx-auto">
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
            d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
            clip-rule="evenodd"
          />
          <path
            d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"
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
            value="hotPlace"
            name="placeRadio"
            id="hotPlace"
            class="hidden"
            v-model="selectedPlace"
          />
          <label
            for="hotPlace"
            class="flex items-center text-gray-600 px-[15px] py-[5px] font-bold tracking-tight min-h-[56px]"
          >
            <div>인기지역</div>
          </label>

          <input
            type="radio"
            value="searchPlace"
            name="placeRadio"
            id="searchPlace"
            class="hidden"
            v-model="selectedPlace"
          />
          <label
            for="searchPlace"
            class="flex items-center text-gray-600 px-[24px] py-[5px] font-bold tracking-tight min-h-[56px]"
          >
            <div>검색</div>
          </label>
        </div>

        <!-- 콘텐츠 영역 -->
        <div class="p-[20px] flex-col bg-transparent">
          <div class="flex gap-[15px] items-center justify-center">
            <div v-show="selectedPlace == 'hotPlace'">
              <div
                v-if="SUBWAY_STATIONS.length > 0"
                class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[10px]"
              >
                <div
                  v-for="item in SUBWAY_STATIONS"
                  class="h-[100px] transition-all duration-300 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg-custom hover:border-[#6c5ce7] cursor-pointer ease-in-out border-[rgba(0,0,0,0.08)] border-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] rounded-[8px] p-[5px] flex flex-col items-center justify-center gap-[8px]"
                >
                  <div class="font-bold text-[0.8rem] break-words">
                    {{ item.name }}
                  </div>
                  <div
                    class="flex gap-[5px] break-words flex-wrap justify-center"
                  >
                    <div
                      v-for="tag in item.tags"
                      class="text-[0.6rem] font-bold bg-[rgba(108,92,231,0.08)] text-[#6c5ce7] px-[4px] rounded-[8px]"
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
import { SUBWAY_STATIONS } from "@/pages/config";
import { ref, watch } from "vue";

export default {
  name: "",
  components: {},
  setup() {
    const selectedPlace = ref("hotPlace");

    // 선택값 변경 감지하여 콘솔 출력
    watch(selectedPlace, (newVal) => {
      console.log("선택된 장소:", newVal);
    });

    return {
      sampleData: "",
      SUBWAY_STATIONS,
      selectedPlace,
    };
  },
};
</script>
