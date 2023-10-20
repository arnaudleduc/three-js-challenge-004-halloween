import { useGLTF, useTexture } from "@react-three/drei"

export default function Trees() {
    // Model import
    const { nodes } = useGLTF('./spookyHouse/models/trees.glb')
    const treeGeometry = nodes.tree3.geometry

    //Texture import
    const treesTexture = useTexture('./spookyHouse/textures/HQ/bakedTrees.jpg')
    treesTexture.flipY = false

    return (
        <>
            <mesh
                geometry={treeGeometry}
                position={nodes.tree3.position}
            >
                <meshBasicMaterial
                    map={treesTexture}
                />
            </mesh>
        </>
    )
}