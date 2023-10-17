import { useGLTF, useTexture } from "@react-three/drei"

export default function House() {
    // Model import
    const {nodes} = useGLTF('./spookyHouse/models/house.glb')
    const emissive = useGLTF('./spookyHouse/models/emissive.glb')
    const emissiveGeometry = emissive.nodes.doorLight.geometry
    console.log(emissiveGeometry);

    // Texture import
    const houseTexture = useTexture('./spookyHouse/textures/bakedHouse.jpg')
    houseTexture.flipY = false

    return <>
        
        <mesh
            geometry={ nodes.facade1.geometry}
            position={ nodes.facade1.position}    
        >
            <meshBasicMaterial map={ houseTexture } />
        </mesh>

        <mesh
            geometry={emissiveGeometry}
            position={emissive.nodes.doorLight.position} 
        >
            <meshBasicMaterial color={'#FF3800'} />
        </mesh>
    </>
}