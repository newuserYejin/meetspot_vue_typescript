<style scoped></style>

<template>
  <div class="w-[25%] p-[24px]">
    <div
      class="bg-white w-[100%] h-[100%] rounded-[8px] p-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
    >
      <div class="font-bold text-[16px] mb-[16px]">⭐ 오늘의 추천 장소</div>
      <div class="bg-[#f8f9ff] rounded-[12px] p-[16px] mb-[20px]">
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
      <Recommendlist v-if="currentStation" :currentStation="currentStation" />
    </div>
  </div>
</template>

<script lang="ts">
import { getRandomStation } from "@/apis/GetRandomStation";
import Recommendlist from "./components/Recommendlist.vue";
import { SubwayStation } from "@/model";
import { ref, onMounted } from "vue";

export default {
  name: "Sidebar",
  components: { Recommendlist },
  setup() {
    const currentStation = ref<SubwayStation | null>(null);

    onMounted(async () => {
      currentStation.value = getRandomStation();
    });

    return {
      currentStation,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
