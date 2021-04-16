import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Draw from './components/draw'

import Lesson1 from './pages/lesson1'
import Lesson2 from './pages/lesson2'
import Lesson3 from './pages/lesson3'
import Test1 from './pages/Test1'
import Jinzita from './pages/Jinzita'

ReactDOM.render(<Learn />, document.getElementById('app'))

function App() {
    return <Draw />
}

function Learn() {
    const mr10 = { marginRight: '10px', height: '10px' }
    const [active, setActive] = useState('A')
    const rcomp = () => {
        switch (active) {
            case '1': return <Lesson1 />
            case '2': return <Lesson2 />
            case '3': return <Lesson3 />
            case 'A': return <Test1 />
            case 'J': return <Jinzita data={Array(5).fill(1)} />
        }
    }
    return <div>
        {/* 切换 */}
        <div style={{ height: '20px' }}>
            <a style={mr10} href='#' onClick={() => setActive('1')}>lesson1</a>
            <a style={mr10} href='#' onClick={() => setActive('2')}>lesson2</a>
            <a style={mr10} href='#' onClick={() => setActive('3')}>lesson3</a>
            <a style={mr10} href='#' onClick={() => setActive('A')}>test1</a>
            <a style={mr10} href='#' onClick={() => setActive('J')}>金字塔</a>
        </div>
        {/* 页面 */}
        <div style={{ height: 'calc(100vh - 20px)' }}>
            {
                rcomp()
            }
        </div>
    </div>
}
