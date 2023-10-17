import { useGLTF, useTexture } from "@react-three/drei"

export default function House() {
    // Model import
    const floor = useGLTF('./spookyHouse/models/base.glb')
    // const {nodes} = useGLTF('./spookyHouse/models/house.glb')
    // const trees = useGLTF('./spookyHouse/models/trees.glb')

    // Texture import
    const floorTexture = useTexture('./spookyHouse/textures/bakedBase.jpg')
    floorTexture.flipY = false
    // const houseTexture = useTexture('./spookyHouse/textures/bakedMesh2.jpg')

    const baseGeometry = floor.nodes.floor.geometry;

    return <>
        <mesh
            geometry={ baseGeometry }
        >
            <meshBasicMaterial map={ floorTexture } />
        </mesh>

        {/* <mesh geometry={ base.nodes.floor.geometry} /> */}
    </>
}