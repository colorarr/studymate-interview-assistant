const BASE_URL = ''

export function request(options) {
	return uni.request({
		url: `${BASE_URL}${options.url}`,
		method: options.method || 'GET',
		data: options.data || {},
		header: options.header || {}
	})
}
