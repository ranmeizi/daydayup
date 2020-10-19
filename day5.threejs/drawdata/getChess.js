import * as THREE from 'three'
import { SceneUtils } from 'three/examples/jsm/utils/SceneUtils.js'

import _1_1 from './chesses/_1_1'
import _2_1 from './chesses/_2_1'
import _3_1 from './chesses/_3_1'
import _4_1 from './chesses/_4_1'
import _4_2 from './chesses/_4_2'
import _4_3 from './chesses/_4_3'
import _5_1 from './chesses/_5_1'
import _5_2 from './chesses/_5_2'
import _5_3 from './chesses/_5_3'
import _5_4 from './chesses/_5_4'
import _6_1 from './chesses/_6_1'
import _6_2 from './chesses/_6_2'
import _6_3 from './chesses/_6_3'
import _6_4 from './chesses/_6_4'
import _6_5 from './chesses/_6_5'
import _6_6 from './chesses/_6_6'
import _6_7 from './chesses/_6_7'
import _6_8 from './chesses/_6_8'
import _6_9 from './chesses/_6_9'
import _6_10 from './chesses/_6_10'
import _6_11 from './chesses/_6_11'
import _6_12 from './chesses/_6_12'

export default function (zoom, color = 0xffcc00) {

    const material = new THREE.MeshPhongMaterial({
        color,
        opacity: 0.4,
        transparent: true
    });

    const materials = [
        material,
        new THREE.MeshBasicMaterial({ color: 0xeeeeee, wireframe: true })
    ]

    return {
        _1_1: new SceneUtils.createMultiMaterialObject(_1_1(zoom), materials),
        _2_1: new SceneUtils.createMultiMaterialObject(_2_1(zoom), materials),
        _3_1: new SceneUtils.createMultiMaterialObject(_3_1(zoom), materials),
        _4_1: new SceneUtils.createMultiMaterialObject(_4_1(zoom), materials),
        _4_2: new SceneUtils.createMultiMaterialObject(_4_2(zoom), materials),
        _4_3: new SceneUtils.createMultiMaterialObject(_4_3(zoom), materials),
        _5_1: new SceneUtils.createMultiMaterialObject(_5_1(zoom), materials),
        _5_2: new SceneUtils.createMultiMaterialObject(_5_2(zoom), materials),
        _5_3: new SceneUtils.createMultiMaterialObject(_5_3(zoom), materials),
        _5_4: new SceneUtils.createMultiMaterialObject(_5_4(zoom), materials),
        _6_1: new SceneUtils.createMultiMaterialObject(_6_1(zoom), materials),
        _6_2: new SceneUtils.createMultiMaterialObject(_6_2(zoom), materials),
        _6_3: new SceneUtils.createMultiMaterialObject(_6_3(zoom), materials),
        _6_4: new SceneUtils.createMultiMaterialObject(_6_4(zoom), materials),
        _6_5: new SceneUtils.createMultiMaterialObject(_6_5(zoom), materials),
        _6_6: new SceneUtils.createMultiMaterialObject(_6_6(zoom), materials),
        _6_7: new SceneUtils.createMultiMaterialObject(_6_7(zoom), materials),
        _6_8: new SceneUtils.createMultiMaterialObject(_6_8(zoom), materials),
        _6_9: new SceneUtils.createMultiMaterialObject(_6_9(zoom), materials),
        _6_10: new SceneUtils.createMultiMaterialObject(_6_10(zoom), materials),
        _6_11: new SceneUtils.createMultiMaterialObject(_6_11(zoom), materials),
        _6_12: new SceneUtils.createMultiMaterialObject(_6_12(zoom), materials),
    }
}   