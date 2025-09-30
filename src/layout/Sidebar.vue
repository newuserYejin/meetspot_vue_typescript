<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>

<template>
  <div class="flex-1 p-[24px]">
    <div
      class="flex-col bg-white w-[100%] rounded-[8px] p-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
    >
      <div class="font-bold text-[16px] mb-[16px]" v-show="todayResult == ''">
        ⭐ 오늘의 추천 장소
      </div>

      <!-- 오늘의 추천역 정보 출력 -->
      <div
        class="bg-[#f8f9ff] rounded-[12px] p-[16px] mb-[20px]"
        v-show="todayResult == ''"
      >
        <div class="text-[18px] font-bold text-[#6c5ce7] mb-[6px]">
          {{ currentStation?.name }}
        </div>
        <div class="text-[13px] text-[#666] mb-[6px] leading-1.4]">
          {{ currentStation?.description }}
        </div>
        <div class="flex gap-[6px] flex-wrap">
          <div
            v-for="(tag, index) in currentStation?.tags"
            :key="index"
            class="flex items-center bg-[#6c5ce7] text-[11px] text-white rounded-[11px] px-[8px] h-[22px] font-bold"
          >
            {{ tag }}
          </div>
        </div>
      </div>

      <!-- <Recommendlist :currentStation="currentStation" /> -->
      <Recommendlist
        v-if="currentStation"
        :currentStation_nm="currentStation.name"
        class="flex-1 hide-scrollbar"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { getRandomStation } from "@/apis/GetRandomStation";
import Recommendlist from "./components/Recommendlist.vue";
import { SubwayStation } from "@/model";
import { computed, ref, watch } from "vue";
import { useTodayResultStore } from "@/stores/useTodayResultStore";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

export default {
  name: "Sidebar",
  components: { Recommendlist },
  setup() {
    const currentStation = ref<SubwayStation | null>(null);
    const todayResultStore = useTodayResultStore();
    const { todayResult } = storeToRefs(todayResultStore);
    const route = useRoute();

    console.log("side bar"); // 공통 로직: 값 변화 또는 라우트 변화마다 currentStation 결정

    const updateSidebar = () => {
      console.log("updateSidebar 실행 : ", todayResult.value);
      if (route.path === "/bestResult" || todayResult.value != "") {
        // /bestResult에서는 todayResult값이 역 이름
        currentStation.value = {
          name: todayResult.value,
          line_num: "",
          description: "",
          tags: [""],
        };
      } else {
        currentStation.value = getRandomStation();
      }
    };
    updateSidebar();

    // todayResult, 라우트 path가 변하면 updateSidebar 다시 실행
    watch([todayResult, () => route.path], updateSidebar);

    return {
      currentStation,
      todayResult,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
