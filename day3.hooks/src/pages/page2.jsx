import React, { useEffect, useRef } from 'react'
import { useDrawImg, useMouseImg } from '../hooks/draw'
import lbxx from '../../assets/mouse.png'
let img = new Image()
img.src = lbxx
export default function () {
  const canvas = useRef(null)
  const [cursor, setImg] = useMouseImg(canvas)
  useEffect(() => {
    setImg(img)
  }, [])
  return <div style={{ position: 'relative' }}>
    <canvas
      style={{ position: 'absolute', top: 0, left: 0, border: '1px solid red', cursor: 'none' }}
      ref={canvas} height='500' width='500'
    />
  </div>
}
