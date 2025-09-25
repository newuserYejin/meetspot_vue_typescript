<style scoped>
.whole_layout {
  padding: 8px;
  background-color: #f8f9fa;
  height: 100vh;
  overflow: hidden;
}
</style>

<template>
  <div class="whole_layout flex flex-col">
    <!-- navbar -->
    <div class="flex gap-[12px] items-center h-[65px] min-h-[70px] mb-[10px]">
      <img
        class="h-[40px] cursor-pointer transition-transform duration-200 hover:scale-105"
        src="/meetspot_logo_font.png"
        alt="MeetSpot Logo"
      />
      <div class="text-[#6c5ce7] font-bold text-[16px]">어디서 만날까?</div>
    </div>

    <div class="flex gap-[10px] flex-1 overflow-y-auto">
      <router-view class="flex-[4] overflow-y-auto overflow-x-hidden h-full" />
      <Sidebar class="flex-1 overflow-y-auto h-full" />
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
