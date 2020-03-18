window.onload = function() {
	bindEvent()
}

function changeImg(file) {
	let img = document.querySelector('.yulan>img')
	readBlobAsDataURL(file, (data) => {
		img.src = data
	})
}

function bindEvent() {
	// 上传
	document.getElementById('iptFile').onchange = function(e) {
		let file = this.files[0]
		if (file) {
			changeImg(file)
		}
	}
	// 变换
	document.getElementById('scale').onclick = function() {
		// 读参数
		let width = document.getElementById('width').value
		let height = document.getElementById('height').value
		// 获取图片
		let img = document.querySelector('.yulan>img')
		let Swidth = img.width
		let Sheight = img.height
		// 使用canvas变换图像
		const canvas = document.createElement('canvas')
		canvas.width = width
		canvas.height = height
		canvas.getContext('2d').drawImage(img, 0, 0, Swidth, Sheight, 0, 0, width, height)
		const src = canvas.toDataURL('image/png');
		img.src = src
	}
	// 下载
	document.getElementById('download').onclick = function() {
		const link = document.createElement('a')
		link.href = document.querySelector('.yulan>img').src
		link.download = 'scale'

		//此写法兼容可火狐浏览器
		document.body.appendChild(link)
		const evt = document.createEvent('MouseEvents')
		evt.initEvent('click', false, false)
		link.dispatchEvent(evt)
		document.body.removeChild(link)
	}
}

function readBlobAsDataURL(blob, callback) {
	var a = new FileReader();
	a.onload = function(e) {
		callback(e.target.result);
	};
	a.readAsDataURL(blob);
}
