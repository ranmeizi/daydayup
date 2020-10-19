import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Draw from './components/draw'

import Lession1 from './pages/lession1'
import Lession2 from './pages/lession2'
import Lession3 from './pages/lession3'
import Test1 from './pages/Test1'

ReactDOM.render(<Learn />, document.getElementById('app'))

function App() {
    return <Draw />
}

function Learn() {
    const mr10 = { marginRight: '10px', height: '10px' }
    const [active, setActive] = useState('A')
    const rcomp = () => {
        switch (active) {
            case '1': return <Lession1 />
            case '2': return <Lession2 />
            case '3': return <Lession3 />
            case 'A': return <Test1 />
        }
    }
    return <div>
        {/* 切换 */}
        <div style={{ height: '20px' }}>
            <a style={mr10} href='#' onClick={() => setActive('1')}>lession1</a>
            <a style={mr10} href='#' onClick={() => setActive('2')}>lession2</a>
            <a style={mr10} href='#' onClick={() => setActive('3')}>lession3</a>
            <a style={mr10} href='#' onClick={() => setActive('A')}>test1</a>
        </div>
        {/* 页面 */}
        <div style={{ height: 'calc(100vh - 20px)' }}>
            {
                rcomp()
            }
        </div>
    </div>
}
