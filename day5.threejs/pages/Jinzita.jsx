import React, { useRef, useEffect, useState } from 'react'
import * as hooks from '../components/hooks'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const SQRT = Math.sqrt(2)

export default function Draw({ data = [] }) {
  const ref = useRef(null)
  const [zoom, setZoom] = useState(2)
  const { rendererRef, cameraRef, sceneRef } = hooks.useCreateScene(ref)
  useEffect(() => {
    const renderer = rendererRef.current
    const camera = cameraRef.current
    const scene = sceneRef.current
    // scene.fog = new THREE.Fog(0xffffff, 0.015, 100)
    // 添加光源
    // const spotLight = new THREE.SpotLight(0xffffff)
    // spotLight.position.set(-40, 60, -10)
    // spotLight.shadow.mapSize.width = 4096;	//阴影贴图宽度设置为2048像素
    // spotLight.shadow.mapSize.height = 4096;	//阴影贴图高度设置为2048像素
    // spotLight.castShadow = true
    // scene.add(spotLight)
    // renderer.setClearColor(0x000000, 0);
    var alight = new THREE.PointLight(0xffffff, 1, 50);
    alight.position.set(6, 9.5, 20);
    scene.add(alight);
    // var plight = new THREE.PointLight(0x333333, 1, 100);
    // plight.position.set(20, 20, 5);
    // scene.add(plight);
    var light = new THREE.AmbientLight(0x666666); // soft white light
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = true;
    controls.minPolarAngle = Math.PI / 2 - 0.1;
    controls.maxPolarAngle = Math.PI / 2 - 0.1;
    function animate() {
      controls.update()
      requestAnimationFrame(animate);
      renderer.render(scene, camera)
    }
    animate()
  }, [])


  useEffect(() => {
    chgange(data)
  }, [data])

  function chgange(data) {
    const scene = sceneRef.current
    // 删除所有mesh
    scene.children.forEach(item => {
      (item instanceof THREE.Group) && scene.remove(item)
    })
    // 添加
    data.forEach((item, index) => {
      const geo = index === 0
        ? getCone(index, zoom)
        : getCylinder(index, zoom)

      geo.position.y -= (index * SQRT + 0.2 * index) * zoom
      scene.add(geo)
    })
  }

  return <div ref={ref} style={{ height: '100%' }} />
}

const colors = [0xeab7a0, 0xdb91ce, 0x798ed5, 0x8377cb, 0xdd4d1e]

function getCone(index, zoom) {
  var geometry = new THREE.ConeGeometry((index + 1) * zoom, SQRT * zoom, 4);
  var material = new THREE.MeshToonMaterial({ color: colors[index % colors.length] });
  var cone = new THREE.Mesh(geometry, material);
  return cone
}
function getCylinder(index, zoom) {
  var geometry = new THREE.CylinderGeometry(index * zoom, (index + 1) * zoom, SQRT * zoom, 4);
  var material = new THREE.MeshToonMaterial({ color: colors[index % colors.length] });
  var cylinder = new THREE.Mesh(geometry, material);
  return cylinder
}