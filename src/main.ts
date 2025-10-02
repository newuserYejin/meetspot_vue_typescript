import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.ts";
import "./style.css";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(VueQueryPlugin).mount("#app");
