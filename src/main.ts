import Vue from "vue";
import App from "./App.vue";

import "./assets/styles/main.css";
import { vClickOutside } from "@/directives/v-click-outside";
import { vDirection } from "@/directives/v-direction";

Vue.directive("click-outside", vClickOutside);
Vue.directive("direction", vDirection);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
