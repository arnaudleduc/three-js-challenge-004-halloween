import { useGLTF, useTexture } from "@react-three/drei"

export default function Base() {
    // Model import
    const base = useGLTF('./spookyHouse/models/base.glb')
    const baseGeometry = base.nodes.floor.geometry

    // Texture import
    const baseTexture = useTexture('./spookyHouse/textures/HQ/bakedBase.jpg')
    baseTexture.flipY = false

    return (
        <>
            <mesh
                geometry={baseGeometry}
                position={base.nodes.floor.position}
            >
                <meshBasicMaterial map={baseTexture} />
            </mesh>
        </>
    )
}