import { SubwayStation } from "@/model";
import { SUBWAY_STATIONS } from "@/pages/config";

export const getRandomStation = (): SubwayStation => {
  const randomIndex = Math.floor(Math.random() * SUBWAY_STATIONS.length);
  return SUBWAY_STATIONS[randomIndex];
};
