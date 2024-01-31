import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleArrowLeft, faCircleArrowRight);

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
