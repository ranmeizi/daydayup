import * as THREE from 'three'
import _1_1 from './_1_1'

export default function (zoom) {
    const baseGeom = _1_1(zoom)

    const geometry = new THREE.Geometry();
    const material = new THREE.MeshBasicMaterial({});

    const mesh1 = new THREE.Mesh(baseGeom, material);
    const mesh2 = new THREE.Mesh(baseGeom, material);
    const mesh3 = new THREE.Mesh(baseGeom, material);
    const mesh4 = new THREE.Mesh(baseGeom, material);
    const mesh5 = new THREE.Mesh(baseGeom, material);
    const mesh6 = new THREE.Mesh(baseGeom, material);

    mesh2.position.x = -zoom * Math.sqrt(3)
    mesh2.updateMatrix()

    mesh3.rotation.y = Math.PI
    mesh3.position.z = zoom / 2
    mesh3.position.x = zoom * Math.sqrt(3) / 2
    mesh3.updateMatrix()

    mesh4.rotation.y = Math.PI
    mesh4.position.z = zoom / 2
    mesh4.position.x = -zoom * Math.sqrt(3) / 2
    mesh4.updateMatrix()

    mesh5.position.z = 1.5 * zoom
    mesh5.position.x = -zoom * Math.sqrt(3) / 2
    mesh5.updateMatrix()

    mesh6.rotation.y = Math.PI / 3
    mesh6.position.z = - zoom
    mesh6.position.x = 0
    mesh6.updateMatrix()

    geometry.merge(mesh1.geometry, mesh1.matrix)
    geometry.merge(mesh2.geometry, mesh2.matrix)
    geometry.merge(mesh3.geometry, mesh3.matrix)
    geometry.merge(mesh4.geometry, mesh4.matrix)
    geometry.merge(mesh5.geometry, mesh5.matrix)
    geometry.merge(mesh6.geometry, mesh6.matrix)

    return geometry
}