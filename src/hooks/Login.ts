import { loginWithEmail } from "@/apis/UserApi";
import { LoginRequest } from "@/model";
import { useMutation } from "@tanstack/vue-query";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["userlogin"],
    mutationFn: (params: LoginRequest) => {
      return loginWithEmail(params);
    },
  });
};
