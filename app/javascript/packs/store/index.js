import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { //componentから $storeでアクセスできる保持したい状態を設定
    idToken: null
  },
  getters: { //stateの値を取得する関数
    idToken: state => state.idToken
  },
  mutations: { //stateの値を変更するための関数
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    }
  },
});
