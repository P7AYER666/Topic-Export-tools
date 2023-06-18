import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from "element-ui";
import VueDraggable from "vuedraggable";
import "element-ui/lib/theme-chalk/index.css";
import "./global/element.scss";
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueDraggable);
new Vue({
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
