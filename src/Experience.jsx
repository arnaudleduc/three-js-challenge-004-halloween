import { useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles, Text, Html } from '@react-three/drei'
// import { Perf } from 'r3f-perf'
import Base from './Base'
import Trees from './Trees'
import House from './House'
import Bats from './Bats'
import Haze from './Haze'
import Floor from './Floor'
import Gems from './Gems'

export default function Experience() {
    const [showTitle, setShowTitle] = useState(true)

    useFrame((state) => {
        setShowTitle(!(state.camera.position.x < 17))
    })

    const haze = useMemo(() => <Haze />, [])
    const screenWidth = window.innerWidth < 768 ? 1 : 2
    const textWidth = useMemo(() => window.innerWidth < 768 ? 5 : 15, [window.innerWidth])
    const subTextPosition = useMemo(() => window.innerWidth < 768 ? [0, -2.3, 0] : [4.6, -2.3, 0], [window.innerWidth])
    const instructionsText = useMemo(() => window.innerWidth < 768 ? 'Zoom in' : 'Scroll Up', [window.innerWidth])

    return (
        <>
            {/* <Perf position="top-left" /> */}
            <color args={['#030917']} attach="background" />
            {/* <gridHelper /> */}
            <OrbitControls
                minDistance={10}
                maxDistance={45}
                maxPolarAngle={(Math.PI / 2) - 0.1}
                enablePan={false}
                target={[0, 3, 0]}
            />
            <group
                position={[20, 16, 20]}
                rotation-y={-(Math.PI) * 1.85}
                visible={showTitle}
            >
                <Text
                    font='./fonts/creepsterFont.woff'
                    fontSize={screenWidth}
                    maxWidth={textWidth}
                    lineHeight={0.9}
                    textAlign='right'
                    color={'#fc8914'}
                >
                    (Not so) Abandoned House
                </Text>
                <Text
                    font='./fonts/creepsterFont.woff'
                    fontSize={0.5}
                    position={subTextPosition}
                    maxWidth={textWidth}
                    textAlign='right'
                    color={'#fc8914'}
                >
                    {instructionsText} and find the gems !
                </Text>
            </group>

            <Base />
            <Trees />
            <House />
            <Bats />
            {haze}
            <Floor />
            <Gems />
            <Sparkles
                count={30}
                speed={0.6}
                color={"orange"}
                size={5}
                scale={[11, 5, 11]}
                position-y={2.7}
            />
        </>
    )
}