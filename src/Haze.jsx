import { useRef, useState } from 'react'
import { Clouds, Cloud } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Haze() {
    const haze = useRef()
    console.log(haze);

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const hazeRotation = new THREE.Euler(0, time * 0.02, 0)
        haze.current.setRotationFromEuler(hazeRotation)
    }) 

    return <>
        <Clouds
            ref={haze}
            material={THREE.MeshBasicMaterial}
        >
            <Cloud
                segments={100}
                bounds={[11, 1, 11]}
                concentrate='inside'
                volume={25}
                color="white"
                opacity={ 0.1 }
                position={[0, 0, 0]}
                fade={100}
                growth={2}
            />
            {/* <Cloud
                seed={1}
                scale={2}
                volume={5}
                color="hotpink"
                fade={100}
            /> */}
        </Clouds>
    </>
}