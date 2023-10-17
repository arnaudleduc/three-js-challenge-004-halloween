import { useGLTF, useTexture } from "@react-three/drei"
import Base from "./Base"

export default function House() {
    // const {nodes} = useGLTF('./spookyHouse/models/house.glb')
    // const trees = useGLTF('./spookyHouse/models/trees.glb')

    // Texture import
    // const houseTexture = useTexture('./spookyHouse/textures/bakedMesh2.jpg')

    return <>
        
        <Base />
        {/* <mesh geometry={ base.nodes.floor.geometry} /> */}
    </>
}