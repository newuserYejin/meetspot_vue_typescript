/// <reference types="vite/client" />

// vue 파일들의 타입 정의
declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const omponent: DefineComponent<{}, {}, any>;

  export default component;
}
