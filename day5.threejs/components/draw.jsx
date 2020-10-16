import React, { useRef, useEffect } from 'react'
import * as hooks from './hooks'

export default function Draw() {
    const ref = useRef(null)
    hooks.useCreateScene(ref)
    return <div ref={ref} style={{ height: '100vh' }} />
}