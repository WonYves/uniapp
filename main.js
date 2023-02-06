import App from './App'
import Vue from 'vue'
import store from './store'
import request from './utils/request.js'

const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

const navTo = function(url, needLogin){
	// if(needLogin && !store.state.hasLogin) {
	// 	uni.navigateTo({
	// 	    url: '/pages/login/login'
	// 	});
	// 	return
	// }
	uni.navigateTo({
	    url
	});
}


Vue.prototype.$store = store
Vue.prototype.$Api = {msg, request}
Vue.prototype.navTo = navTo
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()

