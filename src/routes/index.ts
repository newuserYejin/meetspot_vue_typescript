import Layout from "@/layout/Layout.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 라우트 배열에 타입 추가
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@pages/Main.vue"),
      },
      {
        path: "bestResult",
        name: "best result page",
        component: () => import("@pages/ResultPage.vue"),
      },
    ],
  },
];

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
