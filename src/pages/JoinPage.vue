<style scoped></style>

<template>
  <div class="flex justify-center items-center">
    <div
      class="max-h-[80vh] flex items-center justify-center p-[20px] box-border bg-[#f8f9fa] w-full"
    >
      <form
        class="border-[1px] border-[#e1e5e9] max-w-[600px] transition-all ease-in duration-300 flex flex-col gap-[24px] justify-center items-center w-full mx-auto p-[40px] bg-white rounded-[12px] shadow-md"
      >
        <div class="text-[24px] font-bold text-center mb-[8px] text-[#6c5ce7]">
          회원가입
        </div>

        <input
          type="text"
          name="userId"
          id="userId"
          class="border-[1px] border-gray-300 py-[15px] px-[10px] box-border rounded-[8px] w-full"
          placeholder="이메일"
        />

        <input
          type="password"
          name="userPw"
          id="userPw"
          class="border-[1px] border-gray-300 py-[15px] px-[10px] box-border rounded-[8px] w-full"
          placeholder="비밀번호"
        />

        <input
          type="password"
          name="userPw_re"
          id="userPw_re"
          class="border-[1px] border-gray-300 py-[15px] px-[10px] box-border rounded-[8px] w-full"
          placeholder="비밀번호 확인"
        />

        <input
          type="text"
          name="userName"
          id="userName"
          class="border-[1px] border-gray-300 py-[15px] px-[10px] box-border rounded-[8px] w-full"
          placeholder="사용자 이름"
        />

        <input
          type="text"
          name="userStation"
          id="userStation"
          class="border-[1px] border-gray-300 py-[15px] px-[10px] box-border rounded-[8px] w-full"
          placeholder="출발역"
        />

        <div
          @click="goLoginPage"
          class="flex gap-[5px] text-[#6c5ce7] font-bold cursor-pointer mt-[8px] items-center justify-end w-full hover:text-[#764ba2] hover:underline"
        >
          이미 계정이 있으신가요 ? 로그인하러 가기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>

        <button
          class="w-full py-[14px] rounded-[8px] text-[16px] font-bold bg-[#6c5ce7] text-white cursor-pointer disabled:bg-gray-300"
          @click="checkInput"
        >
          회원가입 하기
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useJoin } from "@/hooks/Join";
import { JoinRequet } from "@/model";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "",
  components: {},
  setup() {
    const router = useRouter();

    const {
      mutate: joinMutation,
      isLoading,
      isError,
      error,
      isPending,
    } = useJoin();

    const goLoginPage = () => {
      router.push("/login");
    };

    const checkInput = (event: Event) => {
      event.preventDefault();

      const button = event.target as HTMLElement;
      const form = button.closest("form"); // 가장 가까운 form 요소 찾기

      if (!form) {
        console.error("폼을 찾을 수 없습니다.");
        return;
      }

      const inputs = form.querySelectorAll("input");

      const data: Record<string, string> = {};

      inputs.forEach((input) => {
        const id = input.id;
        if (id) {
          data[id] = input.value;
        }
      });

      console.log("자동 수집된 Form 데이터:", data);

      if (data.userPw !== data.userPw_re) {
        console.log("비밀번호 확인 불일치");
        return false;
      }

      doJoin(data);
    };

    const doJoin = (joinData: Record<string, string>) => {
      console.log("joinData : ", joinData);

      const sendData: JoinRequet = {
        userId: joinData.userId ?? "",
        userPw: joinData.userPw ?? "",
        userName: joinData.userName ?? "",
        userStation: joinData.userStation ?? "",
      };

      joinMutation(sendData);
    };

    return {
      goLoginPage,
      checkInput,
      doJoin,
    };
  },
};
</script>
