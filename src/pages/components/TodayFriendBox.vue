<style scoped></style>

<template>
  <div class="py-[20px] px-[24px] h-100%">
    <div class="flex-col">
      <!-- title -->
      <div class="flex items-center gap-[10px] p-[20px] pb-[16px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-12 bg-[#d63384] fill-white p-[8px] rounded-[5px]"
        >
          <path
            fill-rule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
            clip-rule="evenodd"
          />
          <path
            d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"
          />
        </svg>
        <div class="font-bold text-[24px] tracking-tight">오늘 만날 친구</div>
      </div>

      <div
        class="h-[500px] w-[100%] overflow-y-auto overflow-x-hidden flex-col rounded-[18px] border-[1px] border-[rgba(0,0,0,0.04)] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <!-- 탭 -->
        <div class="border-b-[rgba(0,0,0,0.06)] border-b-[1px] p-[20px]">
          <div
            class="text-[#9c27b0] border-b-[#9c27b0] border-b-[3px] font-bold cursor-pointer w-fit text-[0.95em] px-[24px] py-[16px] min-h-[56px]"
          >
            <div>친구 추가</div>
          </div>
        </div>

        <!-- 콘텐츠 영역 -->
        <div class="p-[20px] flex-col">
          <div class="flex gap-[15px] items-center">
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                  />
                  <path
                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="ex) 길동이"
              />
            </div>

            <div class="relative w-full">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                  />
                  <path
                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="ex) 홍대입구"
              />

              <ui
                v-show="false"
                class="absolute shadow-lg w-full mt-[5px] z-3 bg-white rounded-b-[8px] list-none"
              >
                <li class="cursor-pointer hover:bg-[#f5f5f5] p-[10px]">asd</li>
                <li class="cursor-pointer hover:bg-[#f5f5f5] p-[10px]">asd</li>
                <li class="cursor-pointer hover:bg-[#f5f5f5] p-[10px]">asd</li>
                <li class="cursor-pointer hover:bg-[#f5f5f5] p-[10px]">asd</li>
              </ui>
            </div>

            <button
              class="bg-[#d63384] text-white h-[100%] w-[20%] p-[8px] rounded-[8px] cursor-pointer hover:bg-[#cc317e]"
            >
              추가
            </button>
          </div>

          <!-- 친구 목록 -->
          <div>
            <div>추가된 친구 (2명)</div>

            <div class="flex-col">
              <div
                class="shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex p-[16px] border border-[rgba(0,0,0,0.06)] mb-[12px] rounded-[12px] text-[#333] gap-[30px] items-center"
              >
                <div>icon</div>
                <div>
                  <div>이름</div>
                  <div>홍대입구</div>
                </div>
                <button class="ml-auto cursor-pointer">x</button>
              </div>

              <div
                class="shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex p-[16px] border border-[rgba(0,0,0,0.06)] mb-[12px] rounded-[12px] text-[#333] gap-[30px] items-center"
              >
                <div>icon</div>
                <div>
                  <div>이름</div>
                  <div>홍대입구</div>
                </div>
                <button class="ml-auto cursor-pointer">x</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TodayFriendBox",
  components: {},
  setup() {
    return {
      sampleData: "",
    };
  },
};
</script>
