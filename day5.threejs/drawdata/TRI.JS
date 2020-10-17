import * as THREE from 'three'
import { SceneUtils } from 'three//examples/jsm/utils/SceneUtils.js'

export default function get(zoom = 1) {

    const base = 1 * zoom

    var geometry = new THREE.Geometry();

    // sanjiaoxing
    var geo1 = new THREE.CylinderGeometry(base * 5, base * 5, base * 1.5, 3);
    var geo2 = new THREE.CylinderGeometry(base * 4.5, base * 4.5, base * 0.75, 3);

    var material = new THREE.MeshPhongMaterial({
        color: 0xffcc00,
        opacity: 0.3,
        transparent: true
    });

    var t1 = new THREE.Mesh(geo1, material);
    var t2 = new THREE.Mesh(geo2, material);
    t2.position.y -= base * 0.75
    t2.updateMatrix()
    var t3 = new THREE.Mesh(geo2, material);
    t3.position.y += base * 0.75
    t3.updateMatrix()



    geometry.merge(t1.geometry, t1.matrix)
    geometry.merge(t2.geometry, t2.matrix)
    geometry.merge(t3.geometry, t3.matrix)

    const materials = [
        material,
        new THREE.MeshBasicMaterial({ color: 0xeeeeee, wireframe: true })
    ]

    let geom = new SceneUtils.createMultiMaterialObject(geometry, materials)

    return geom
}