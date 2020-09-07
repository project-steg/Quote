import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        viewPage: 0
      };
    },
    mutations: {
      viewPage(state, viewPage) {
        state.viewPage = viewPage;
        console.log(state.viewPage);
      },
    }
  });
};
export default createStore;