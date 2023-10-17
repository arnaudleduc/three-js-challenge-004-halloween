import './style/main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
      flat
      camera={ {
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ - 4, 3, 6 ]
       } }
    >
      <Experience />
    </Canvas>
  </React.StrictMode>
)