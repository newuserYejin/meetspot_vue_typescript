<style scoped>
.whole_layout {
  padding: 8px;
  background-color: #f8f9fa;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
}
</style>

<template>
  <div class="whole_layout flex flex-col">
    <!-- navbaar -->
    <div class="flex gap-[12px] items-center h-[65px] mb-[10px]">
      <img
        class="h-[40px] cursor-pointer transition-transform duration-200 hover:scale-105"
        src="/meetspot_logo_font.png"
        alt="MeetSpot Logo"
      />
      <div class="text-[#6c5ce7] font-bold text-[16px]">어디서 만날까?</div>
    </div>

    <div class="flex gap-[30px] flex-1">
      <router-view class="border w-[75%] overflow-y-auto overflow-x-hidden" />
      <Sidebar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./Sidebar.vue";

export default defineComponent({
  name: "Layout",
  components: { Sidebar },
  data() {
    return {
      sampleData: "",
    };
  },
  created() {},
  mounted() {},
});
</script>
