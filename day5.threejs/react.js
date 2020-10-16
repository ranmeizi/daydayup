import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Draw from './components/draw'

import Lession1 from './pages/lession1'
import Lession2 from './pages/lession2'

ReactDOM.render(<Learn />, document.getElementById('app'))

function App() {
    return <Draw />
}

const mr10 = { marginRight: '10px', height: '10px' }

function Learn() {
    const [active, setActive] = useState('')
    return <div>
        {/* 切换 */}
        <div style={{ height: '20px' }}>
            <a style={mr10} href='#' onClick={() => setActive('1')}>lession1</a>
            <a style={mr10} href='#' onClick={() => setActive('2')}>lession2</a>
        </div>
        {/* 页面 */}
        <div style={{ height: 'calc(100vh - 20px)' }}>
            {
                active === '1'
                    ? <Lession1 />
                    : active === '2'
                        ? <Lession2 />
                        : null
            }
        </div>
    </div>
}
