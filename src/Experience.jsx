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
    return <>
        <Perf position="top-left" />
        <color args={['#030917']} attach="background" />
        {/* <gridHelper /> */}
        <OrbitControls
            // minDistance={10}
            maxDistance={45}
            // maxPolarAngle={(Math.PI / 2) - 0.1}
        />

        <Text
            font='./fonts/creepsterFont.woff'
            fontSize={2}
            position={[20, 16, 20]}
            rotation-y={-(Math.PI) * 1.85}
            maxWidth={15}
            textAlign='right'
        >
            (Not so) Abandonned House
        </Text>
        <Text
            font='./fonts/creepsterFont.woff'
            fontSize={0.5}
            position={[24.5, 13.5, 18]}
            rotation-y={-(Math.PI) * 1.85}
            maxWidth={15}
            textAlign='right'
        >
            Scroll and find the gems !
        </Text>
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