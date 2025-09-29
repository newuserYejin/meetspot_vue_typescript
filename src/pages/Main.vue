<style scoped></style>

<template>
  <div>
    <TodayFriendBox />
    <ChoicePlace />
    <CheckTodayMeeting />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodayFriendBox from "./components/TodayFriendBox.vue";
import ChoicePlace from "./components/ChoicePlace.vue";
import CheckTodayMeeting from "./components/CheckTodayMeeting.vue";

export default defineComponent({
  name: "Mainpage",
  components: {
    TodayFriendBox,
    ChoicePlace,
    CheckTodayMeeting,
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
