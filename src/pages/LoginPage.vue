<style scoped>
.whole_layout {
  padding: 8px;
  background-color: #f8f9fa;
  height: 100vh;
  overflow: hidden;
  padding: 1rem 2rem;
}
</style>

<template>
  <div class="flex justify-center items-center">
    <div
      class="max-h-[80vh] flex items-center justify-center p-[20px] box-border bg-[#f8f9fa] w-full"
    >
      <form
        class="border-[1px] border-[#e1e5e9] max-w-[600px] transition-all ease-in duration-300 flex flex-col gap-[24px] justify-center items-center w-full mx-auto p-[40px] bg-white rounded-[12px] shadow-md"
      >
        <div class="text-[24px] font-bold text-center mb-[8px] text-[#6c5ce7]">
          로그인
        </div>

        <div class="flex gap-[10px] justify-between w-full">
          <input
            type="text"
            name="member_id"
            id="member_id"
            class="border-[1px] border-gray-300 py-[15px] px-[10px] box-border rounded-[8px] w-full"
            placeholder="이메일"
            v-model="userId"
          />
        </div>

        <div class="flex gap-[10px] justify-between w-full">
          <input
            type="password"
            name="member_pw"
            id="member_pw"
            class="border-[1px] border-gray-300 py-[15px] px-[10px] box-border rounded-[8px] w-full"
            placeholder="비밀번호"
            v-model="userPw"
          />
        </div>

        <div
          @click="goJoinPage"
          class="flex gap-[5px] text-[#6c5ce7] font-bold cursor-pointer mt-[8px] items-center justify-end w-full hover:text-[#764ba2] hover:underline"
        >
          계정이 없으신가요? 회원가입하기
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
          :disabled="userId.trim() == '' || userPw.trim() == ''"
          @click="checkInput"
        >
          로그인
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useLogin } from "@/hooks/Login";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "",
  components: {},
  setup() {
    const userId = ref<string>("");
    const userPw = ref<string>("");
    const route = useRouter();

    const {
      mutate: loginMutation,
      isSuccess,
      isError,
      error,
      isPending,
    } = useLogin();

    const goJoinPage = () => {
      route.push("/join");
    };

    const doLogin = () => {
      loginMutation({ userId: userId.value, userPw: userPw.value });
    };

    // 유효성 검사
    const checkInput = (event: Event) => {
      event.preventDefault();

      console.log("checkInput userId : ", userId);
      console.log("checkInput userPw : ", userPw);

      if (userId.value == "123") {
        doLogin();
      }
    };

    return {
      goJoinPage,
      checkInput,
      userId,
      userPw,
    };
  },
};
</script>
