import React, { useState } from 'react'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

const PAGES = [
  {
    desc: '在canvas上画图片~',
    components: Page1
  },
  {
    desc: '用图片更换鼠标指针~',
    components: Page2
  },
  {
    desc: '点击图片放到canvas上~',
    components: Page3
  },
]

export default function App() {
  const [active, setActive] = useState(0)
  return <div style={{ height: '100px' }}>
    {/* 切换 */}
    <div style={{ display: 'column', justifyContent: 'center', height: '50px' }}>
      <div style={{ display: 'flex' }}>
        <button onClick={() => { setActive(0) }}>需求1</button>
        <button onClick={() => { setActive(1) }}>需求2</button>
        <button onClick={() => { setActive(2) }}>需求3</button>
      </div>
      <div>
        {PAGES[active].desc}
      </div>
    </div>
    {/* 图 */}
    <div style={{ height: 'calc(100vh - 50px)' }}>
      {
        React.createElement(PAGES[active].components)
      }
    </div>

  </div>
}