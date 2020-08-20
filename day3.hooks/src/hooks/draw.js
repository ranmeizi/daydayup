import { useState, useEffect, useRef } from 'react'
// 画图
export function useDrawImg(canvas) {
  function drawImage(x, y, img) {
    const ctx = canvas.current.getContext('2d')
    ctx.drawImage(img, x, y, img.width, img.height)
  }
  function clear() {
    const { height, width } = canvas.current
    const ctx = canvas.current.getContext('2d')
    ctx.clearRect(0, 0, width, height)
  }
  return {
    drawImage,
    clear
  }
}
// 鼠标移动
export function useMouseImg(canvas) {
  const img = useRef(null)
  const { drawImage, clear } = useDrawImg(canvas)
  useEffect(() => {
    console.log(111)
    const el = canvas.current
    el.addEventListener('mousemove', move)
    return () => {
      el.removeEventListener('mousemove', move)
    }
  }, [])

  function move(e) {
    const { offsetX: x, offsetY: y } = e
    clear()
    drawImage(x, y, img.current)
  }
  function setImg(image) {
    img.current = image
  }
  return [img, setImg]
}