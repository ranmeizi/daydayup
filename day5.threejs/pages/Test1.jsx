import React, { useRef, useEffect, useState } from 'react'
import * as hooks from '../components/hooks'
import * as THREE from 'three'
import getChess from '../drawdata/getChess'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const colors = {
    red: 0xff0000,
    blue: 0x0000ff,
    yellow: 0xffcc00,
    green: 0x00ff00
}

export default function Draw() {
    const ref = useRef(null)
    const [geoId, setGeoId] = useState('_6_5')
    const [color, setColor] = useState('red')
    const { rendererRef, cameraRef, sceneRef } = hooks.useCreateScene(ref)
    const mr10 = { marginRight: '10px', height: '10px' }
    useEffect(() => {
        console.log(rendererRef, cameraRef, sceneRef)
        const renderer = rendererRef.current
        const camera = cameraRef.current
        const scene = sceneRef.current

        renderer.setClearColor(0xEEEEEE, 1.0)

        var light = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add(light);

        camera.position.x = -30
        camera.position.y = 10
        camera.position.z = 30
        camera.lookAt(scene.position)

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = true;
        function animate() {
            controls.update()
            requestAnimationFrame(animate);
            renderer.render(scene, camera)
        }
        animate()

    }, [])
    useEffect(() => {
        chgange(geoId, color)
    }, [geoId, color])

    function chgange(changeId, changeColor) {
        changeId = changeId || geoId
        changeColor = changeColor || color
        const scene = sceneRef.current
        // 删除所有mesh
        scene.children.forEach(item => {
            (item instanceof THREE.Group) && scene.remove(item)
        })
        // 添加geoId的Mesh
        if (changeId) {
            let mesh = getChess(5, colors[changeColor])[changeId]
            mesh.name = changeId
            scene.add(mesh);
        }
    }

    return <div ref={ref} style={{ height: '100%', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '0px', left: 0 }}>
            <a style={mr10} href='#' onClick={() => setGeoId('_1_1')}>_1_1</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_2_1')}>_2_1</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_3_1')}>_3_1</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_4_1')}>_4_1</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_4_2')}>_4_2</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_4_3')}>_4_3</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_5_1')}>_5_1</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_5_2')}>_5_2</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_5_3')}>_5_3</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_5_4')}>_5_4</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_1')}>_6_1</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_2')}>_6_2</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_3')}>_6_3</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_4')}>_6_4</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_5')}>_6_5</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_6')}>_6_6</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_7')}>_6_7</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_8')}>_6_8</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_9')}>_6_9</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_10')}>_6_10</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_11')}>_6_11</a>
            <a style={mr10} href='#' onClick={() => setGeoId('_6_12')}>_6_12</a>
        </div>
        <div style={{ position: 'absolute', top: '20px', left: 0 }}>
            <a style={mr10} href='#' onClick={() => setColor('red')}>red</a>
            <a style={mr10} href='#' onClick={() => setColor('blue')}>blue</a>
            <a style={mr10} href='#' onClick={() => setColor('yellow')}>yellow</a>
            <a style={mr10} href='#' onClick={() => setColor('green')}>green</a>
        </div>
    </div>
}