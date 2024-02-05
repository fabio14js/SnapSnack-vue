import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import Restaurant from "./pages/restaurant.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/restaurant",
      name: "restaurant",
      component: Restaurant,
    },
  ],
});
export { router };
