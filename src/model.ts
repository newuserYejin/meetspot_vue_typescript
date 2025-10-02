export interface PlaceItem {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface SubwayStation {
  name: string;
  line_num: string;
  description: string;
  tags: string[];
}

export type RECOMMEND_SUBWAY_STATIONS = SubwayStation[];

export interface StationData {
  line_num?: string;
  station_cd?: string;
  real_cd?: string; // 친구용으로만 사용
  station_nm: string;
  fr_code?: string;
  X?: number;
  Y?: number;
}

export interface StationResponse {
  DESCRIPTION: {
    STATION_NM: string;
    STATION_CD: string;
    REAL_CD?: string;
    LINE_NUM: string;
    FR_CODE: string;
  };
  DATA: StationData[];
}

export interface Friend extends StationData {
  friend_name: string;
  group?: string;
}

export interface SearchStationResult {
  stationClass: number;
  stationName: string;
  stationID: string;
  x: number;
  y: number;
  CID: number;
  cityName: string;
  arsID: string;
  do: string;
  gu: string;
  dong: string;
  type: number;
  laneName: string;
  laneCity: String;
  ebid: string;
}

export interface CalStationPathResult {
  friend_info: Friend;
  target_place_info: StationData;
  time: number;
  station_cnt: number;
  exChange_cnt: number;
}

// 로그인
export interface LoginRequest {
  userId: string;
  userPw: string;
}

// 회원가입
export interface JoinRequet {
  userId: string;
  userPw: string;
  userName: string;
  userStation: string;
}
