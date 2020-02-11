class Avatar {
	constructor({
		height = 300,
		width = 300
	}) {
		// 根节点
		var root = document.createElement('div')
		root.className = 'zcr-avatar'
		this.root = root
		// img标签
		var img = document.createElement('img')
		this.img = img
		this.canvas = null
	}
	render() {
		// canvas
		var canvas = document.createElement('canvas')
		return this.root
	}
}
