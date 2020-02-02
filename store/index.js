import {getLayout} from "../endpoints/app";

export const state = () => ({
  header: null
})
export const actions = {
  setHeader({commit}){
   /* getCodes().then(response => {
        console.log('gowno');
    })*/
  },
  nuxtServerInit ({ commit }, { req }) {
    return new Promise((resolve, reject) => {
      getLayout().then(response => {
        commit('SET_HEADER', response);
        resolve();
      }).catch(e => {
        resolve();
      })
    })
  }
}
export const mutations = {
  SET_HEADER:(state, data) => {state.header = data}
}
export const getters = {
  header:(state) => {return state.header}
}
