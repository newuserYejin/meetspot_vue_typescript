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
        path: "test",
        name: "test view",
        component: () => import("@pages/TestPage.vue"),
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
