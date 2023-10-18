import { useGLTF, useTexture } from "@react-three/drei"

export default function House() {
    // Model import
    const {nodes} = useGLTF('./spookyHouse/models/house.glb')
    const emissive = useGLTF('./spookyHouse/models/emissive.glb')
    const emissiveGeometry = emissive.nodes.doorLight.geometry

    const roof = useGLTF('./spookyHouse/models/roof.glb')
    const roofGeometry = roof.nodes.sousToit2.geometry

    // Texture import
    const houseTexture = useTexture('./spookyHouse/textures/bakedHouse.jpg')
    houseTexture.flipY = false

    const roofTexture = useTexture('./spookyHouse/textures/bakedRoof.jpg')
    roofTexture.flipY = false

    return <>
        
        <mesh
            geometry={nodes.facade1.geometry}
            position={nodes.facade1.position}    
        >
            <meshBasicMaterial map={ houseTexture } />
        </mesh>

        <mesh
            geometry={emissiveGeometry}
            position={emissive.nodes.doorLight.position} 
        >
            <meshBasicMaterial color={'#FF3800'} />
        </mesh>

        <mesh
            geometry={roofGeometry}
            position={roof.nodes.sousToit2.position} 
        >
            <meshBasicMaterial map={ roofTexture } />
        </mesh>
    </>
}