import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={   //要设置的全局访问的state对象
    //要设置的初始属性值
    lockerCodelist:[],
    carportMassage:{},
    currentIp:JSON.parse(window.localStorage.getItem('currentIp'))||'120.76.123.91',
    currentPort:JSON.parse(window.localStorage.getItem('currentPort'))||'9098',
    historyAddress:JSON.parse(window.localStorage.getItem('historyAddress')),
    ipCheck:'',
    loading:false
  };
const getters = {   //实时监听state值的变化(最新状态)
   isShow(state) {  //承载变化的showFooter的值
      return state.showFooter
   },
   
};
const mutations = {
    lockerCodelist(state,obj) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
       state.lockerCodelist = obj;
   },
    changeIp(state,data){
        state.currentIp=data
    },
    changePort(state,data){
        state.currentPort=data
    },
    historyAddress(state,data){
        state.historyAddress=data
    },
    ipCheck(state,data){
        state.ipCheck=data
    },
    updateLoadingStatus (state, data) {
        state.loading = data
    }
};
const actions = {
   hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
       context.commit('hide');
   }
};
 const store = new Vuex.Store({
      state,
      getters,
      mutations,
      actions
});
store.registerModule('vux', { // 名字自己定义
    state: {
        isLoading: false
    },
    mutations: {
        updateLoadingStatus (state, payload) {
        state.isLoading = payload.isLoading
        }
    }
})
 
export default store;