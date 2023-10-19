import { useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import useGemsStore from "./stores/useGems"

export default function Secrets() {
    const gemsRef = useRef([])

    const { increaseGemCount } = useGemsStore()

    // Model import
    const [gemsModel] = useState([
        useGLTF('./spookyHouse/models/secret1.glb'),
        useGLTF('./spookyHouse/models/secret2.glb'),
        useGLTF('./spookyHouse/models/secret3.glb'),
        useGLTF('./spookyHouse/models/secret4.glb'),
        useGLTF('./spookyHouse/models/secret5.glb'),
        useGLTF('./spookyHouse/models/secret6.glb'),
        useGLTF('./spookyHouse/models/secret7.glb'),
    ])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const gemRotation = new THREE.Euler(0, time * 0.5, 0)
        const y = Math.sin(time / 10) / 350

        gemsRef.current.forEach(ref => {
            ref.setRotationFromEuler(gemRotation)
            ref.translateY(y / 60)
        })
    })

    const onGemClick = (index) => {
        if (gemsRef.current[index].visible) {
            increaseGemCount()
            gemsRef.current[index].visible = false
        }
    }

    return <>
        {gemsModel.map((gemNumber, index) => {
            const gemIndex = index === 0 ? 'gem' : `gem00${index}`
            return <mesh
                key={`gem-${index + 1}`}
                ref={element => gemsRef.current[index] = element}
                geometry={gemNumber.nodes[gemIndex].geometry}
                position={gemNumber.nodes[gemIndex].position}
                onClick={() => onGemClick(index)}
            >
                <meshBasicMaterial color={'#020417'} />
            </mesh>
        })}
    </>
}