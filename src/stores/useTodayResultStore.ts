import { defineStore } from "pinia";

export const useTodayResultStore = defineStore("todayResult", {
  state: (): { todayResult: string } => {
    return { todayResult: "" };
  },
  actions: {
    setResultPlace(selectedPlace: string) {
      this.todayResult = selectedPlace;
    },
  },
});
