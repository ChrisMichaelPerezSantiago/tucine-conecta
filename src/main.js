import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import BootstrapVue from 'bootstrap-vue';
import { plugin } from 'vue-function-api';
import hooks from '@u3u/vue-hooks';

require('./assets/css/styles.css');

Vue.config.productionTip = false;

Vue.use(hooks);
Vue.use(plugin);
Vue.use(BootstrapVue)


new Vue({
  router,
  store,
  mounted(){
    require('./lib/js/index.js');
  },
  render: h => h(App)
}).$mount("#app");
