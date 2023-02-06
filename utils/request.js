import { fail, rejects } from 'assert'
import config from '../config.js'
import store from '../store'


/**
 * @author zhuoer
 * @param {*} method  String; get and post
 * @param {*}  url  String
 * @param {*}  data  Object 请求参数
 * @param {*}  loading  Boolean 是否需要loading 
 * @param {*}  contentType  String 请求类型
 * @param {*}  headers  Object headers
 * @return {type} Promise
 */
const request = ({method, url, data, loading, contentType, headers = {}} = {}) => {
	return new Promise((resolve, reject) => {
		if(loading) {
			uni.showLoading({
				title: '请稍后',
				mask: true
			})
		}
		// token
		let Authorization = ''
		let user = store.state.user
		if(store.state.user.userInfo?.token) {
			Authorization = `${tokenHead} ${token}`
		}
		// ajax
		uni.request({
			url: config.baseUrl + url,
			data: data,
			method: method,
			header: {
				'Content-Type': contentType || 'application/x-www-form-urlencoded',
				'Authorization': Authorization || '',
				...headers
			},
			success(res) {
				if(res.statusCode === 200) {
					const {code, data, message} = resData.data
					if(code === 200) {
						resolve(res.data)
						return 
					}
					if(code === 401) {
						// 登录过期 处理
					} 
					uni.showToast({
						title: message,
						icon: "none"
					})
				}
				const err = new Error('请求出现异常')
				reject(err)
			},
			fail(err) {
				reject(err)
			},
			complete() {
				if(loading) {
					uni.hideLoading()
				}
			}
		});
	})
}

module.exports = request