import React, { useRef, useEffect } from 'react'
import { useDrawImg, useMouseImg } from '../hooks/draw'
import lbxx from '../../assets/mouse.png'
import fcskdrt from '../../assets/fcskdrt.jpg'
import nai200 from '../../assets/nai200.jpg'
import qi60 from '../../assets/qi60.jpg'
import kzp from '../../assets/kzp.jpg'
import wlssdmg from '../../assets/wlssdmg.jpg'
let img = new Image()
img.src = lbxx
export default function () {
  const canvas = useRef(null)
  const canvasCursor = useRef(null)
  const { drawImage, clear } = useDrawImg(canvas)
  const [cursor, setImg] = useMouseImg(canvasCursor)
  useEffect(() => {
    setImg(img)
    // 绑定事件
    canvasCursor.current.addEventListener('click', onCanvasClick)
  }, [])
  function onCanvasClick(e) {
    const { offsetX: x, offsetY: y } = e
    // 画画
    if (cursor.current !== img) {
      console.log(x, y, cursor.current)
      drawImage(x, y, cursor.current)
    }
    // 改变光标
    setImg(img)
  }
  function changeImg(e) {
    setImg(e.target)
  }
  return <div style={{ position: 'relative' }}>
    <canvas
      style={{ position: 'absolute', top: 0, left: 0, border: '1px solid red', cursor: 'none' }}
      ref={canvas} height='500' width='500'
    />
    <canvas
      style={{ position: 'absolute', top: 0, left: 0, border: '1px solid red', cursor: 'none' }}
      ref={canvasCursor} height='500' width='500'
    />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', left: '500px' }}>
      <img onClick={changeImg} src={fcskdrt} alt="" />
      <img onClick={changeImg} src={nai200} alt="" />
      <img onClick={changeImg} src={qi60} alt="" />
      <img onClick={changeImg} src={kzp} alt="" />
      <img onClick={changeImg} src={wlssdmg} alt="" />
    </div>
  </div>
}