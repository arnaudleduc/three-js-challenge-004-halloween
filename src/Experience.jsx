import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import House from './House'

export default function Experience() {

    return <>
        <Perf position="top-left" />

        <color args={['#030917']} attach="background" />
        <OrbitControls makeDefault />

        <House />
    </>
}