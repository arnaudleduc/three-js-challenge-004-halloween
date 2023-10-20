import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Interface from './Interface'
import LoadingScreen from './LoadingScreen'
import useSoundsStore from './stores/useSounds'

const ambienceSound = new Audio('./sounds/ambience_sound.mp3')

export default function App() {
    const [start, setStart] = useState(false)
    const { isSoundOn } = useSoundsStore()

    useEffect(() => {
        if (start) {
            if (isSoundOn === true) {
                ambienceSound.play()
                ambienceSound.loop = true
            } else if (isSoundOn == false) {
                ambienceSound.pause()
            }
        }
    }, [start, isSoundOn])

    return (
        <>
            <Canvas
                flat
                camera={{
                    fov: 50,
                    near: 0.1,
                    far: 30,
                    position: [28, 20, 28]
                }}
            >
                <fog attach="fog" args={['#030917', 0.1, 40]} />
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
            <Interface />
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
    )
}