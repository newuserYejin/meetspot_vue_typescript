import { StationData } from "@/model";
import { defineStore } from "pinia";

export const usePlaceStore = defineStore("selectedPlace", {
  state: (): { selectedPlaceList: StationData[] } => {
    return { selectedPlaceList: [] };
  },
  actions: {
    addPlace(selectedPlace: string, lineNum: string) {
      const newChoice: StationData = {
        line_num: lineNum,
        station_cd: "",
        station_nm: selectedPlace,
        fr_code: "",
      };

      this.selectedPlaceList.push(newChoice);
    },
    deletePlace(indexNum: number) {
      this.selectedPlaceList.splice(indexNum, 1);
    },
  },
});
