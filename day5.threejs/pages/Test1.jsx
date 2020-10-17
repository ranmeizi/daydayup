import React, { useRef, useEffect } from 'react'
import * as hooks from '../components/hooks'
import * as THREE from 'three'
import getTri from '../drawdata/TRI'


export default function Draw() {
    const ref = useRef(null)
    const { rendererRef, cameraRef, sceneRef } = hooks.useCreateScene(ref)
    useEffect(() => {
        console.log(rendererRef, cameraRef, sceneRef)
        const renderer = rendererRef.current
        const camera = cameraRef.current
        const scene = sceneRef.current

        renderer.setClearColor(0xEEEEEE, 1.0)

        var light = new THREE.AmbientLight(0xeeeeee); // soft white light
        scene.add(light);


        // 获取模型
        const geom = getTri(2)

        camera.position.x = -30
        camera.position.y = 10
        camera.position.z = 30
        camera.lookAt(scene.position)

        scene.add(geom)

        function animate() {
            geom.rotation.x += 0.01
            geom.rotation.y += 0.01
            geom.rotation.z += 0.01
            requestAnimationFrame(animate);
            renderer.render(scene, camera)
        }
        animate()

    }, [])
    return <div ref={ref} style={{ height: '100%' }} />
}