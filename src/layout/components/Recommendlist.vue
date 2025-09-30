<style scoped>
.placeItem {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 12px 16px;
  margin: 4px 0;
  border-bottom: solid 1px #e0e0e0;

  transition: all 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
}
</style>
<template>
  <div class="mb-[24px]">
    <div>
      <div
        class="text-[14px] font-bold text-[#333] mb-[12px] flex items-center gap-6px"
      >
        🍽️ 추천 맛집
      </div>

      <template v-if="restaurants.length > 0">
        <div
          v-for="(item, index) in restaurants"
          :key="index"
          class="flex flex-col cursor-pointer px-[12px] py-[16px] my-[4px] border-b-[1px] border-[#e0e0e0] last:border-b-0 hover:bg-[#f5f5f5] hover:rounded-[8px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-200 ease-in-out hover:-translate-y-1"
          v-on:click="openPlaceMap(item.place_url)"
        >
          <div class="text-[15px] font-bold text-[#333] mb-[4px]">
            {{ item.place_name }}
          </div>
          <div class="text-[13px] text-[#666]">
            {{ item.category_name.split(" > ").pop() }}
          </div>
        </div>
      </template>
      <div v-else class="text-[13px] text-[#999] p-[20px] text-center">
        맛집 정보가 없습니다
      </div>
    </div>

    <div>
      <div
        class="text-[14px] font-bold text-[#333] mb-[12px] flex items-center gap-6px"
      >
        ☕ 추천 카페
      </div>

      <template v-if="cafes.length > 0">
        <div
          v-for="(item, index) in cafes"
          :key="index"
          class="placeItem"
          @click="openPlaceMap(item.place_url)"
        >
          <div class="text-[15px] font-bold text-[#333] mb-[4px]">
            {{ item.place_name }}
          </div>
          <div class="text-[13px] text-[#666]">
            {{ item.category_name.split(" > ").pop() }}
          </div>
        </div>
      </template>
      <div v-else class="text-[13px] text-[#999] p-[20px] text-center">
        카페 정보가 없습니다
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchPlace } from "@/apis/FetchPlaceApi";
import { PlaceItem, SubwayStation } from "@/model";
import { onMounted, PropType, ref, watch } from "vue";

export default {
  name: "RecommendedList",
  components: {},
  props: {
    currentStation_nm: {
      // type: Object as PropType<SubwayStation | null >,
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const restaurants = ref<PlaceItem[]>([]);
    const cafes = ref<PlaceItem[]>([]);
    const isLoading = ref(true);
    const error = ref<string | null>(null);

    const fetchData = async (stationName: string) => {
      console.log("currentStation_nm : ", stationName);
      if (!stationName) return;
      isLoading.value = true;

      try {
        const resultFood = await fetchPlace(stationName, "맛집", 3);
        restaurants.value = resultFood;

        const resultCafe = await fetchPlace(stationName, "카페", 3);
        cafes.value = resultCafe;

        error.value = null;
      } catch (e: any) {
        error.value = e.message || "ERROR";
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fetchData(props.currentStation_nm);
    });

    const openPlaceMap = (url: string) => {
      window.open(url, "_blank");
    };

    // watch로 prop 변경 시마다 fetch 재실행
    watch(
      () => props.currentStation_nm,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          fetchData(newVal);
        }
      }
    );

    return {
      restaurants,
      cafes,
      isLoading,
      error,
      openPlaceMap,
    };
  },
};
</script>
