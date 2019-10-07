import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import { plugin } from 'vue-function-api';
import hooks from '@u3u/vue-hooks';

Vue.config.productionTip = false;

Vue.use(hooks);
Vue.use(plugin);

require('./assets/css/styles.css');

new Vue({
  router,
  store,
  mounted(){
    require('./lib/js/index.js');
  },
  render: h => h(App)
}).$mount("#app");
