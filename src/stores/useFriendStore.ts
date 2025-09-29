import { Friend } from "@/model";
import { defineStore } from "pinia";

export const useFriendStore = defineStore("todayFriend", {
  state: (): { todayFriendList: Friend[] } => {
    return { todayFriendList: [] };
  },
  actions: {
    addFriend(friendInfo: Friend) {
      this.todayFriendList.push(friendInfo);
    },
    deleteFriend(indexNum: number) {
      this.todayFriendList.splice(indexNum, 1);
    },
  },
});
