import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Importando estilos do Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Importando componentes do Bootstrap-Vue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Configurando o Vue para usar o Bootstrap e o Bootstrap-Vue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
