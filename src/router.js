import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";

import Restaurant from "./pages/restaurant.vue"
import Search from "./pages/search.vue";

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
    {
			path: "/search/:slug",
			props: true,
			name: "search",
			component: Search,
		},
  ],


});
export { router };
