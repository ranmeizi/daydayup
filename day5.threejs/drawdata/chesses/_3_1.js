import * as THREE from 'three'
import _1_1 from './_1_1'

export default function (zoom) {
    const baseGeom = _1_1(zoom)

    const geometry = new THREE.Geometry();
    const material = new THREE.MeshBasicMaterial({});

    const mesh1 = new THREE.Mesh(baseGeom, material);
    const mesh2 = new THREE.Mesh(baseGeom, material);
    const mesh3 = new THREE.Mesh(baseGeom, material);

    mesh2.rotation.y = Math.PI
    mesh2.position.z = -zoom
    mesh2.updateMatrix()
    mesh3.rotation.y = Math.PI
    mesh3.position.z = zoom / 2
    mesh3.position.x = zoom * Math.sqrt(3) / 2
    mesh3.updateMatrix()

    geometry.merge(mesh1.geometry, mesh1.matrix)
    geometry.merge(mesh2.geometry, mesh2.matrix)
    geometry.merge(mesh3.geometry, mesh3.matrix)

    return geometry
}