import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function useCreateScene(ref) {
    const sceneRef = useRef()
    const cameraRef = useRef()
    const rendererRef = useRef()
    useEffect(() => {
        const container = ref.current
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);

        camera.position.z = 50;
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        sceneRef.current = scene
        cameraRef.current = camera
        rendererRef.current = renderer
    }, [])
    return { rendererRef, cameraRef, sceneRef }
}