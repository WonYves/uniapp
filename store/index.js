// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'

// 子组件
import user from './modules/user' 

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		user
	}
})
export default store