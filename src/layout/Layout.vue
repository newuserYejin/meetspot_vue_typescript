<style scoped>
.whole_layout {
  padding: 8px;
  background-color: #f8f9fa;
  height: 100vh;
  overflow: hidden;
  padding: 1rem 2rem;
}
</style>

<template>
  <div class="whole_layout flex flex-col">
    <!-- navbar -->
    <div
      class="flex items-center justify-between h-[65px] min-h-[70px] mb-[10px]"
    >
      <div class="flex gap-[12px] items-center cursor-pointer" @click="goHome">
        <img
          class="h-[40px] cursor-pointer transition-transform duration-200 hover:scale-105"
          src="/meetspot_logo_font.png"
          alt="MeetSpot Logo"
        />
        <div class="text-[#6c5ce7] font-bold text-[16px]">어디서 만날까?</div>
      </div>

      <!-- 이미 로그인함 -->
      <div v-if="isLogin" class="flex gap-[15px] items-center">
        <div>우앙 / 삼성역</div>

        <!-- 자신의 정보 수정 -->
        <button class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>

        <button
          class="border-[1px] border-gray-500 px-[24px] py-[8px] rounded-[20px] font-bold shadow-sm transition-all ease-in-out duration-300 hover:bg-[#6c5ce7] hover:text-white hover:-translate-y-0.5 cursor-pointer"
        >
          로그아웃
        </button>
      </div>

      <!-- 아직 로그인 전 -->
      <div v-else>
        <button
          class="bg-[#6c5ce7] text-white rounded-[20px] px-[24px] py-[8px] font-bold text-[14px] shadow-md transition-all ease-in-out duration-300 hover:bg-gray-500 hover:-translate-y-1 cursor-pointer"
          @click="goLoginPage"
        >
          로그인
        </button>
      </div>
    </div>

    <div class="flex gap-[10px] flex-1 overflow-y-auto">
      <router-view class="flex-[4] overflow-y-auto overflow-x-hidden h-full" />
      <Sidebar class="flex-1 overflow-y-auto h-full" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import Sidebar from "./Sidebar.vue";
import router from "@/routes";
import { useTodayResultStore } from "@/stores/useTodayResultStore";

export default defineComponent({
  name: "Layout",
  components: { Sidebar },
  computed: {
    // store에서 가져오는 todayResult를 computed로 사용
    todayResult() {
      const todayResultStore = useTodayResultStore();
      return todayResultStore.todayResult;
    },
  },
  data() {
    const todayResultStore = useTodayResultStore();
    const { setResultPlace } = todayResultStore;
    const isLogin = ref<boolean>(false);

    const goLoginPage = () => {
      console.log("go login");

      router.push("/login"); // 화면 이동
    };

    const goHome = async () => {
      setResultPlace(""); // 상태 변경

      router.push("/"); // 화면 이동
    };

    return {
      setResultPlace,
      goHome,
      goLoginPage,
      isLogin,
    };
  },
  mounted() {},
});
</script>
