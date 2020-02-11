class Modal {
	constructor({
		title,
		content,
		event: {
			pageX,
			pageY
		},
		width = 600
	}) {
		this.title = title
		this.content = content
		this.origin = [pageX, pageY]
		this.width = width
		this.render()
	}
	open() {
		this.mask.classList.add('active')
		this.modal.classList.add('active')
		this.modal.style.top = '100px'
		this.modal.style.left = `calc(50vw - ${this.width/2}px)`
	}
	close() {
		this.mask.classList.remove('active')
		this.modal.classList.remove('active')
		// modal归位
		this.modal.style.left = `${this.origin[0]-this.width/2}px`
		this.modal.style.top = this.origin[1] + 'px'
		// 删除dom
		this.mask.addEventListener('transitionend', () => {
			document.body.removeChild(this.mask)
		})
		var fnEndModal = () => {
			document.body.removeChild(this.modal)
			this.modal.removeEventListener('transitionend', fnEndModal)
		}
		this.modal.addEventListener('transitionend', fnEndModal)
	}
	render() {
		// 遮罩
		var mask = document.createElement('div')
		mask.className = 'zcr-Modal-mask'
		mask.onclick = () => {
			this.close()
		}
		// Modal
		var modal = document.createElement('div')
		modal.className = 'zcr-Modal'
		modal.style.width = this.width + 'px'
		modal.style.left = `${this.origin[0]-this.width/2}px`
		modal.style.top = this.origin[1] + 'px'

		// title
		var title = document.createElement('div')
		title.className = 'zcr-Modal-title'
		title.innerHTML = this.title
		// close
		var close = document.createElement('div')
		close.className = 'zcr-Modal-title-close'
		close.innerHTML='X'
		title.onclick = () => {
			this.close()
		}
		title.appendChild(close)
		// content
		var content = document.createElement('div')
		content.className = 'zcr-Modal-content'
		content.appendChild(this.content)


		modal.appendChild(title)
		modal.appendChild(content)
		this.mask = mask
		this.modal = modal

		document.body.appendChild(this.mask)
		document.body.appendChild(this.modal)
	}
}
