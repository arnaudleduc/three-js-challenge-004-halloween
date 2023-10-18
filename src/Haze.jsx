import { Clouds, Cloud } from '@react-three/drei'
import * as THREE from 'three'

export default function Haze() {
    return <>
        <Clouds
            material={THREE.MeshBasicMaterial}
        >
            <Cloud
                segments={40}
                bounds={[10, 2, 2]}
                volume={10}
                color="orange"
            />
            <Cloud
                seed={1}
                scale={2}
                volume={5}
                color="hotpink"
                fade={100}
            />
        </Clouds>
    </>
}