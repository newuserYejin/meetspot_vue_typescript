<style scoped></style>

<template>
  <div>
    <TodayFriendBox />
    <ChoicePlace />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodayFriendBox from "./components/TodayFriendBox.vue";
import ChoicePlace from "./components/ChoicePlace.vue";

export default defineComponent({
  name: "Mainpage",
  components: {
    TodayFriendBox,
    ChoicePlace,
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
