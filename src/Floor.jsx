export default function Floor() {
    return (
        <>
            <mesh rotation-x={-(Math.PI * 0.5)}>
                <planeGeometry
                    args={[100, 100]}
                />
                <meshBasicMaterial
                    color={'#030917'}
                />
            </mesh>
        </>
    )
}