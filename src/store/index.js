import Vue from "vue";
import Vuex from "vuex";
import fc from "./fc";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { fc },
});
