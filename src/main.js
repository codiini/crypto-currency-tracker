import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/index.css";

import Cryptoicon from "vue-cryptoicon";
import icons from "vue-cryptoicon/src/icons";
Cryptoicon.add(icons);
Vue.use(Cryptoicon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
