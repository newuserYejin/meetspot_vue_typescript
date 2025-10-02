import { JoinRequet, LoginRequest } from "@/model";

export const loginWithEmail = async (params: LoginRequest) => {
  console.log("params : ", params);
};

export const joinWithEmail = async (params: JoinRequet) => {
  console.log("params : ", params);
};
