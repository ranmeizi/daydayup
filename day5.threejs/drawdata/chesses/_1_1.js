import * as THREE from 'three'

export default function (zoom = 1) {

    const base = 1 * zoom

    var geometry = new THREE.Geometry();
    const material = new THREE.MeshBasicMaterial({});
    // sanjiaoxing
    var geo1 = new THREE.CylinderGeometry(base, base, base * 0.3, 3);
    var geo2 = new THREE.CylinderGeometry(base * 0.9, base * 0.9, base * 0.15, 3);

    var t1 = new THREE.Mesh(geo1, material);
    var t2 = new THREE.Mesh(geo2, material);
    t2.position.y -= base * 0.15
    t2.updateMatrix()
    var t3 = new THREE.Mesh(geo2, material);
    t3.position.y += base * 0.15
    t3.updateMatrix()

    geometry.merge(t1.geometry, t1.matrix)
    geometry.merge(t2.geometry, t2.matrix)
    geometry.merge(t3.geometry, t3.matrix)

    return geometry
}