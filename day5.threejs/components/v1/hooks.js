import { useEffect, useRef } from 'react'

// 三个主要元素

export function useRenderer(container, options) {
    const renderer = useRef(null)
    const container = ref.current
    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.current.domElement);
    return renderer
}