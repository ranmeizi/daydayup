import React, { useState } from 'react'

export default function (props) {
  const [count, setCount] = useState(1)
  return <div>{count}<button onClick={() => setCount(count + 1)}>+1</button></div>
}