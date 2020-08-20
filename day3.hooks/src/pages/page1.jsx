import React, { useEffect, useRef } from 'react'
import { useDrawImg } from '../hooks/draw'
import lbxx from '../../assets/lbxx.png'

export default function () {
  const canvas = useRef(null)
  const { drawImage, clear } = useDrawImg(canvas)
  useEffect(() => {
    draw()
  }, [])
  function draw() {
    let img = new Image()
    img.src = lbxx
    img.onload = () => drawImage(100, 100, img)
  }
  return <div style={{ position: 'relative' }}>
    <canvas
      style={{ position: 'absolute', top: 0, left: 0, border: '1px solid red' }}
      ref={canvas} height='500' width='500'
    />
    {/* 按钮组 */}
    <div style={{ position: 'absolute', left: '400px', top: '20px' }}>
      <button onClick={draw}>画图</button>
      <button onClick={clear}>清除</button>
    </div>
  </div>
}
