import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Base from './Base'
import Trees from './Trees'
import House from './House'
import Bats from './Bats'
import Haze from './Haze'
import Floor from './Floor'

export default function Experience() {

    return <>
        <Perf position="top-left" />
        <color args={['#030917']} attach="background" />
        {/* <gridHelper /> */}
        <OrbitControls
            minDistance={10}
            maxDistance={25}
            maxPolarAngle={(Math.PI / 2) - 0.1}
        />

        <Base />
        <Trees />
        <House />
        <Bats />
        <Haze />
        <Floor />
    </>
}