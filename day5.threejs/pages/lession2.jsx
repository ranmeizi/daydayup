import React, { useRef, useEffect } from 'react'
import * as hooks from '../components/hooks'
import * as THREE from 'three'


export default function Draw() {
    const ref = useRef(null)
    const { rendererRef, cameraRef, sceneRef } = hooks.useCreateScene(ref)
    useEffect(() => {
        const renderer = rendererRef.current
        const camera = cameraRef.current
        const scene = sceneRef.current
        // 添加聚光灯光源
        const spotLight = new THREE.SpotLight(0xffffff)
        spotLight.position.set(-40, 60, -10)
        spotLight.shadow.mapSize.width = 4096;	//阴影贴图宽度设置为2048像素
        spotLight.shadow.mapSize.height = 4096;	//阴影贴图高度设置为2048像素
        spotLight.castShadow = true
        scene.add(spotLight)

        // 添加环境光
        const ambientLisht = new THREE.AmbientLight(0xffffff)
        scene.add(ambientLisht)

        renderer.setClearColor(0xEEEEEE, 1.0)
        renderer.shadowMapEnabled = true

        const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
        const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial)

        plane.rotation.x = -0.5 * Math.PI
        plane.position.x = 15
        plane.position.y = 0
        plane.position.z = 0

        plane.receiveShadow = true

        scene.add(plane)

        camera.position.x = -30
        camera.position.y = 40
        camera.position.z = 30
        camera.lookAt(scene.position)

        // renderer.render(scene, camera)
        function animate() {

            const cubes = scene.children.filter(item => /cube-/.test(item.name))
            cubes.forEach(cube => {
                // 方块旋转
                cube.rotation.x += 0.02
                cube.rotation.y += 0.02
                cube.rotation.z += 0.02
            })
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    }, [])

    function addCube() {
        const scene = sceneRef.current
        const cubeSize = Math.ceil((Math.random() * 3))
        const cubeGeometry = new THREE.CubeGeometry(cubeSize, cubeSize, cubeSize)
        const cubeMaterial = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        cube.castShadow = true
        cube.name = `cube-${scene.children.length}`
        cube.position.x = Math.round((Math.random() * 60))
        cube.position.y = Math.round((Math.random() * 5))
        cube.position.z = -10 + Math.round((Math.random() * 20))

        scene.add(cube)
        // rendererRef.current.render(scene, cameraRef.current)
    }
    function removeCube() {
        let children = sceneRef.current.children
        const lastChild = children[children.length - 1]
        if (lastChild instanceof THREE.Mesh) {
            sceneRef.current.remove(lastChild)
        }
        // rendererRef.current.render(sceneRef.current, cameraRef.current)
    }
    return <div ref={ref} style={{ height: '100%' }}>
        <div style={{ position: 'absolute' }}>
            <button onClick={addCube}>addCube</button>
            <button onClick={removeCube}>removeCube</button>
        </div>
    </div>
}