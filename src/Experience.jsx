import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles, Text } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Base from './Base'
import Trees from './Trees'
import House from './House'
import Bats from './Bats'
import Haze from './Haze'
import Floor from './Floor'
import Secrets from './Secrets'

export default function Experience() {
    const [showTitle, setShowTitle] = useState(true)
    
    useFrame((state) => {
        setShowTitle(!(state.camera.position.x < 17))
    })

    return <>
        <Perf position="top-left" />
        <color args={['#030917']} attach="background" />
        {/* <gridHelper /> */}
        <OrbitControls
            // minDistance={10}
            maxDistance={45}
            // maxPolarAngle={(Math.PI / 2) - 0.1}
        />
        <group
            position={[20, 16, 20]}
            rotation-y={-(Math.PI) * 1.85}
            visible={showTitle}
        >
            <Text
                font='./fonts/creepsterFont.woff'
                fontSize={2}
                maxWidth={15}
                lineHeight={0.9}
                textAlign='right'
                color={'#fc8914'}
            >
                (Not so) Abandonned House
            </Text>
            <Text
                font='./fonts/creepsterFont.woff'
                fontSize={0.5}
                position={[4.6, -2.3, 0]}
                maxWidth={15}
                textAlign='right'
                color={'#fc8914'}
            >
                Scroll up and find the gems !
            </Text>
        </group>
        
        <Base />
        <Trees />
        <House />
        <Bats />
        <Haze />
        <Floor />
        <Secrets />
        <Sparkles
            count={30}
            speed={0.6}
            color={"orange"}
            size={2}
            scale={[11, 5, 11]}
            position-y={2.7}
        />
    </>
}