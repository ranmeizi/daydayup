import React, { useRef, useEffect } from 'react'
import * as hooks from '../components/hooks'
import * as THREE from 'three'


export default function Draw() {
    const ref = useRef(null)
    const { rendererRef, cameraRef, sceneRef } = hooks.useCreateScene(ref)
    useEffect(() => {
        console.log(rendererRef, cameraRef, sceneRef)
        const renderer = rendererRef.current
        const camera = cameraRef.current
        const scene = sceneRef.current
        // 添加光源
        const spotLight = new THREE.SpotLight(0xffffff)
        spotLight.position.set(-40, 60, -10)
        spotLight.shadow.mapSize.width = 4096;	//阴影贴图宽度设置为2048像素
        spotLight.shadow.mapSize.height = 4096;	//阴影贴图高度设置为2048像素
        spotLight.castShadow = true
        scene.add(spotLight)

        // 画图
        renderer.setClearColor(0xEEEEEE, 1.0)
        renderer.shadowMapEnabled = true
        const axes = new THREE.AxisHelper(20)
        scene.add(axes)

        const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
        const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial)

        plane.rotation.x = -0.5 * Math.PI
        plane.position.x = 15
        plane.position.y = 0
        plane.position.z = 0

        plane.receiveShadow = true

        scene.add(plane)

        const cubeGeometry = new THREE.CubeGeometry(4, 4, 4)
        const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 })
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

        cube.position.x = -4
        cube.position.y = 3
        cube.position.z = 0

        cube.castShadow = true

        scene.add(cube)

        const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
        const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff })
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

        sphere.position.x = 20
        sphere.position.y = 4
        sphere.position.z = 2

        sphere.castShadow = true

        scene.add(sphere)

        camera.position.x = -30
        camera.position.y = 40
        camera.position.z = 30
        camera.lookAt(scene.position)

        // renderer.render(scene, camera)
        let step = 0
        function animate() {
            // 方块旋转
            cube.rotation.x += 0.02
            cube.rotation.y += 0.02
            cube.rotation.z += 0.02
            // 弹跳球
            step += 0.04
            sphere.position.x = 20 + (10 * (Math.cos(step)))
            sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)))
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();



    }, [])
    return <div ref={ref} style={{ height: '100%' }} />
}