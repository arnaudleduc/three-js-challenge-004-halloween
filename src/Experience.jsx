import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Base from './Base'
import Trees from './Trees'

export default function Experience() {

    return <>
        <Perf position="top-left" />

        <color args={['#030917']} attach="background" />
        <OrbitControls makeDefault />

        <Base />
        <Trees />
    </>
}