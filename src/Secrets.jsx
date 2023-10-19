import { useRef, useState } from "react"
import { useGLTF, Html } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import useGemsStore from "./stores/useGems"

export default function Secrets() {
    const secret1Ref = useRef()
    const secret2Ref = useRef()
    const secret3Ref = useRef()
    const secret4Ref = useRef()
    const secret5Ref = useRef()
    const secret6Ref = useRef()
    const secret7Ref = useRef()

    const {increaseGemCount} = useGemsStore()

    const [gem1NotFound, setGem1NotFound] = useState(true)
    const [gem2NotFound, setGem2NotFound] = useState(true)
    const [gem3NotFound, setGem3NotFound] = useState(true)
    const [gem4NotFound, setGem4NotFound] = useState(true)
    const [gem5NotFound, setGem5NotFound] = useState(true)
    const [gem6NotFound, setGem6NotFound] = useState(true)
    const [gem7NotFound, setGem7NotFound] = useState(true)

    // Model import
    const secret1 = useGLTF('./spookyHouse/models/secret1.glb')
    const secret2 = useGLTF('./spookyHouse/models/secret2.glb')
    const secret3 = useGLTF('./spookyHouse/models/secret3.glb')
    const secret4 = useGLTF('./spookyHouse/models/secret4.glb')
    const secret5 = useGLTF('./spookyHouse/models/secret5.glb')
    const secret6 = useGLTF('./spookyHouse/models/secret6.glb')
    const secret7 = useGLTF('./spookyHouse/models/secret7.glb')

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const secretRotation = new THREE.Euler(0, time * 0.5, 0)
        secret1Ref.current.setRotationFromEuler(secretRotation)
        secret2Ref.current.setRotationFromEuler(secretRotation)
        secret3Ref.current.setRotationFromEuler(secretRotation)
        secret4Ref.current.setRotationFromEuler(secretRotation)
        secret5Ref.current.setRotationFromEuler(secretRotation)
        secret6Ref.current.setRotationFromEuler(secretRotation)
        secret7Ref.current.setRotationFromEuler(secretRotation)

        const y = Math.sin(time / 10) / 350
        secret1Ref.current.translateY(y / 60)
        secret2Ref.current.translateY(y / 60)
        secret3Ref.current.translateY(y / 60)
        secret4Ref.current.translateY(y / 60)
        secret5Ref.current.translateY(y / 60)
        secret6Ref.current.translateY(y / 60)
        secret7Ref.current.translateY(y / 60)
    })

    const onGem1Click = () => {
        increaseGemCount()
        setGem1NotFound(false)
    }
    const onGem2Click = () => {
        increaseGemCount()
        setGem2NotFound(false)
    }
    const onGem3Click = () => {
        increaseGemCount()
        setGem3NotFound(false)
    }
    const onGem4Click = () => {
        increaseGemCount()
        setGem4NotFound(false)
    }
    const onGem5Click = () => {
        increaseGemCount()
        setGem5NotFound(false)
    }
    const onGem6Click = () => {
        increaseGemCount()
        setGem6NotFound(false)
    }
    const onGem7Click = () => {
        increaseGemCount()
        setGem7NotFound(false)
    }

    return <>
        <mesh
            ref={secret1Ref}
            geometry={secret1.nodes.gem.geometry}
            position={secret1.nodes.gem.position}
            onClick={onGem1Click}
            visible={gem1NotFound}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            ref={secret2Ref}
            geometry={secret2.nodes.gem001.geometry}
            position={secret2.nodes.gem001.position}
            onClick={onGem2Click}
            visible={gem2NotFound}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            ref={secret3Ref}
            geometry={secret3.nodes.gem002.geometry}
            position={secret3.nodes.gem002.position}
            onClick={onGem3Click}
            visible={gem3NotFound}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            ref={secret4Ref}
            geometry={secret4.nodes.gem003.geometry}
            position={secret4.nodes.gem003.position}
            onClick={onGem4Click}
            visible={gem4NotFound}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            ref={secret5Ref}
            geometry={secret5.nodes.gem004.geometry}
            position={secret5.nodes.gem004.position}
            onClick={onGem5Click}
            visible={gem5NotFound}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            ref={secret6Ref}
            geometry={secret6.nodes.gem005.geometry}
            position={secret6.nodes.gem005.position}
            onClick={onGem6Click}
            visible={gem6NotFound}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            ref={secret7Ref}
            geometry={secret7.nodes.gem006.geometry}
            position={secret7.nodes.gem006.position}
            onClick={onGem7Click}
            visible={gem7NotFound}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>
    </>
}