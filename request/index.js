import baseUrl from './baseUrl'
export default class request {
	constructor(arg = []) {
	    // let [url = '', date = {}, type = 'GET', header = {}] = arg
		this.url = arg.url || ''
		this.date = arg.date || {}
		this.type = arg.type || 'GET'
		this.header = arg.header || {}
	}
	ajax(){
		return new Promise((resolve, reject) => {
			uni.request({
				method: this.type,
				url: baseUrl + this.url,
				data: this.date,
				header: this.header,
				dataType: 'json',
			}).then((response) => {
				// setTimeout(function() {
				// 	uni.hideLoading();
				// }, 200);
				let [error, res] = response;
				resolve(res);
			}).catch(error => {
				let [err, res] = error;
				reject(err)
			})
		});
	}
}

