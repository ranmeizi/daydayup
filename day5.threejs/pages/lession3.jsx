import React, { useRef, useEffect } from 'react'
import * as hooks from '../components/hooks'
import * as THREE from 'three'
import {SceneUtils} from 'three//examples/jsm/utils/SceneUtils.js'


export default function Draw() {
    const ref = useRef(null)
    const { rendererRef, cameraRef, sceneRef } = hooks.useCreateScene(ref)
    useEffect(() => {
        console.log(rendererRef, cameraRef, sceneRef)
        const renderer = rendererRef.current
        const camera = cameraRef.current
        const scene = sceneRef.current
        renderer.setClearColor(0xEEEEEE, 1.0)
        // 添加聚光灯光源
        const spotLight = new THREE.SpotLight(0xffffff)
        spotLight.position.set(-40, 60, -10)
        spotLight.shadow.mapSize.width = 4096;	//阴影贴图宽度设置为2048像素
        spotLight.shadow.mapSize.height = 4096;	//阴影贴图高度设置为2048像素
        spotLight.castShadow = true
        scene.add(spotLight)

        const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1)
        const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial)

        plane.rotation.x = -0.5 * Math.PI
        // plane.position.x = 15
        // plane.position.y = 0
        // plane.position.z = 0

        plane.receiveShadow = true

        scene.add(plane)

        camera.position.x = -30
        camera.position.y = 40
        camera.position.z = 30
        camera.lookAt(scene.position)

        // 8个顶点
        const vertices = [
            new THREE.Vector3(1, 3, 1),
            new THREE.Vector3(1, 3, -1),
            new THREE.Vector3(1, -1, 1),
            new THREE.Vector3(1, -1, -1),
            new THREE.Vector3(-1, 3, -1),
            new THREE.Vector3(-1, 3, 1),
            new THREE.Vector3(-1, -1, -1),
            new THREE.Vector3(-1, -1, 1)
        ]
        // 6个面
        const face = [
            new THREE.Face3(0, 2, 1),
            new THREE.Face3(2, 3, 1),
            new THREE.Face3(4, 6, 5),
            new THREE.Face3(6, 7, 5),
            new THREE.Face3(4, 5, 1),
            new THREE.Face3(5, 0, 1),
            new THREE.Face3(7, 6, 2),
            new THREE.Face3(6, 3, 2),
            new THREE.Face3(5, 7, 0),
            new THREE.Face3(7, 2, 0),
            new THREE.Face3(1, 3, 4),
            new THREE.Face3(3, 6, 4)
        ]

        const materials = [
            new THREE.MeshLambertMaterial({ opacity: 0.6, color: 0x44ff44 }),
            new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
        ]


        const geom = new THREE.Geometry()
        geom.vertices = vertices
        geom.faces = face
        geom.computeFaceNormals()
        geom.mergeVertices()


        // const mesh = new THREE.Mesh(geom)
        const mesh = SceneUtils.createMultiMaterialObject(geom, materials)




        scene.add(mesh)

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

    }, [])
    return <div ref={ref} style={{ height: '100%' }} />
}