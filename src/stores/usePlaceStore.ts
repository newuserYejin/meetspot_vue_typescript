import { defineStore } from "pinia";

export const usePlaceStore = defineStore("selectedPlace", {
  state: (): { selectedPlaceList: string[] } => {
    return { selectedPlaceList: [] };
  },
  actions: {
    addPlace(selectedPlace: string) {
      this.selectedPlaceList.push(selectedPlace);
    },
    deletePlace(indexNum: number) {
      this.selectedPlaceList.splice(indexNum, 1);
    },
  },
});
