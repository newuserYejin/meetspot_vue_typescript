<style scoped></style>

<template>
  <div>
    <TodayFriendBox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodayFriendBox from "./components/TodayFriendBox.vue";

export default defineComponent({
  name: "Mainpage",
  components: {
    TodayFriendBox,
  },
  data() {
    return {
      sampleData: "",
    };
  },
  created() {},
  mounted() {},
});
</script>
