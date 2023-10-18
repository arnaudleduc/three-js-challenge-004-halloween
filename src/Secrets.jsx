import { useGLTF } from "@react-three/drei"

export default function Secrets() {
    // Model import
    const secret1 = useGLTF('./spookyHouse/models/secret1.glb')
    const secret2 = useGLTF('./spookyHouse/models/secret2.glb')
    const secret3 = useGLTF('./spookyHouse/models/secret3.glb')
    const secret4 = useGLTF('./spookyHouse/models/secret4.glb')
    const secret5 = useGLTF('./spookyHouse/models/secret5.glb')
    const secret6 = useGLTF('./spookyHouse/models/secret6.glb')
    const secret7 = useGLTF('./spookyHouse/models/secret7.glb')

    return <>
        <mesh
            geometry={secret1.nodes.gem.geometry}
            position={secret1.nodes.gem.position}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            geometry={secret2.nodes.gem001.geometry}
            position={secret2.nodes.gem001.position}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            geometry={secret3.nodes.gem002.geometry}
            position={secret3.nodes.gem002.position}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            geometry={secret4.nodes.gem003.geometry}
            position={secret4.nodes.gem003.position}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            geometry={secret5.nodes.gem004.geometry}
            position={secret5.nodes.gem004.position}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            geometry={secret6.nodes.gem005.geometry}
            position={secret6.nodes.gem005.position}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        <mesh
            geometry={secret7.nodes.gem006.geometry}
            position={secret7.nodes.gem006.position}
        >
            <meshBasicMaterial color={'#ffffff'} />
        </mesh>
    </>
}