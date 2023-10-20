import { useGLTF, useAnimations, Float } from "@react-three/drei"
import { useEffect, useMemo } from "react";

export default function Bats() {
    // Model import
    const bat = useGLTF('./spookyHouse/models/bat.glb')
    const flyingBatAnimation = useAnimations(bat.animations, bat.scene)

    useEffect(() => {
        const action = flyingBatAnimation.actions.flyingBatAnimation
        action.play()
    }, [])

    return (
        <>
            <Float
                floatIntensity={2}
            >
                <primitive
                    object={bat.scene}
                    position={bat.scene.position}
                />
            </Float>
        </>
    )
}