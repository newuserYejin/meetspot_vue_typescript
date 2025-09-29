<style scoped></style>

<template>
  <div class="py-[20px] px-[24px] max-w-[1156px] mx-auto">
    <div class="flex-col">
      <div
        class="border-[1px] p-[20px] border-[rgba(0,0,0,0.06)] rounded-[20px] shadow-sm"
      >
        <div class="flex items-center gap-[5px] mb-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-5 fill-[#6c5ce7]"
          >
            <path
              fill-rule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="font-bold text-[1.2rem]">만남 계획 확인</div>
        </div>

        <!-- 만날 친구 확인 -->
        <div
          class="flex flex-wrap items-center gap-[5px] bg-white rounded-[12px] p-[15px] border-[1px] border-[rgba(0,0,0,0.04)] mb-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-4 fill-gray-500"
          >
            <path
              d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"
            />
          </svg>

          <div
            class="text-gray-500 font-bold text-[0.75rem] break-all mr-[10px] min-w-[25%] md:min-w-auto"
          >
            함께할 친구 ( {{ todayFriendList.length }}명 )
          </div>

          <div class="flex flex-wrap">
            <div
              v-for="(friend, index) in todayFriendList"
              class="flex items-center border text-[0.75em] py-[6px] px-[10px] gap-[4px] rounded-[8px] font-bold text-white bg-[#6c757d]"
            >
              <div>{{ friend.friend_name }}</div>
              <div>( {{ friend.station_nm }} )</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-4 font-bold hover:text-black cursor-pointer"
                @click="deleteFriend(index)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- 후보지 확인 -->
        <div
          class="flex items-center gap-[5px] bg-white rounded-[12px] p-[15px] border-[1px] border-[rgba(0,0,0,0.04)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-4 fill-gray-500"
          >
            <path
              fill-rule="evenodd"
              d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
              clip-rule="evenodd"
            />
          </svg>
          <div
            class="text-gray-500 font-bold text-[0.75rem] break-all mr-[10px] min-w-[25%] md:min-w-auto"
          >
            후보 장소 ( {{ selectedPlaceList.length }}개 )
          </div>

          <div class="flex flex-wrap">
            <div
              v-for="(place, index) in selectedPlaceList"
              class="flex items-center border text-[0.75em] py-[6px] px-[10px] gap-[4px] rounded-[8px] font-bold bg-gradient-to-br from-[#6c5ce7] to-[rgb(75,64,161)] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4 fill-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div>{{ place }}</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-4 font-bold hover:text-black cursor-pointer"
                @click="deletePlace(index)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- 계산 버튼 -->
        <div class="flex justify-center items-center my-[20px]">
          <button
            class="flex gap-[10px] transition-all ease-in-out duration-500 hover:-translate-y-1 cursor-pointer items-center bg-gradient-to-tr from-[#667eea] to-[#764ba2] text-white py-[15px] px-[20px] rounded-[8px] text-[0.9rem] font-extrabold"
          >
            {{ todayFriendList.length }}명과 {{ selectedPlaceList.length }}개 역
            중 최적 장소 찾기

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-4.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div class="text-[0.7rem] text-gray-400 font-light text-center">
          각 친구의 이동 시간과 최적 경로를 확인할 수 있습니다
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useFriendStore } from "@/stores/useFriendStore";
import { usePlaceStore } from "@/stores/usePlaceStore";

export default {
  name: "",
  components: {},
  setup() {
    const friendStore = useFriendStore();
    const placeStore = usePlaceStore();
    const { todayFriendList, deleteFriend } = friendStore;
    const { selectedPlaceList, deletePlace } = placeStore;

    return {
      todayFriendList,
      selectedPlaceList,
      deleteFriend,
      deletePlace,
    };
  },
};
</script>
