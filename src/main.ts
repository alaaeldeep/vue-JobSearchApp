import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleDown,
    faAngleUp,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import router from "./router/router";

import { createPinia } from "pinia";

const pinia = createPinia();

library.add(faAngleUp);
library.add(faAngleDown);
library.add(faSearch);

createApp(App)
    .use(pinia)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
