import { joinWithEmail } from "@/apis/UserApi";
import { JoinRequet } from "@/model";
import { useMutation } from "@tanstack/vue-query";

export const useJoin = () => {
  return useMutation({
    mutationKey: ["userJoin"],
    mutationFn: (params: JoinRequet) => {
      return joinWithEmail(params);
    },
  });
};
