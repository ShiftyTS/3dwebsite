import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from '../Loader';

const Snow = ({ isMobile }) => {
    const snow = useGLTF('falling_snow_loop.glb')
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.y += 0.003
    })
    return (
        <mesh ref={mesh}>
            <primitive
                object={snow.scene}
                scale={isMobile ? 1 : 2}
                position={[0, -2.5, 2]}
                rotation={[0, 0, 0]}
            />
        </mesh>
    )
}
const Winter = ({ isMobile }) => {
    const winter = useGLTF('winter_scene.glb')
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.y += 0.003
    })

    return (

        <mesh ref={mesh}>
            <ambientLight intensity={-0.2} />
            <hemisphereLight intensity={0.5} groundColor='black' castShadow />
            <directionalLight
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
                position={isMobile ? [-20, 5, 25] : [-30, 10, 25]}
                intensity={0.3}
                color={0xffffff}
            />
            <directionalLight
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
                position={isMobile ? [0, 0, -10] : [0, 0, -10]}
                intensity={0.1}
                color={0xffffff}
            />
            <spotLight intensity={1} angle={1} penumbra={1} position={[20, 15, 10]} castShadow />
            <pointLight intensity={0.5} position={isMobile ? [0, -1.1, 0] : [0, 0.1, 0]} />
            <pointLight intensity={0.3} position={isMobile ? [1, -1.15, -2.15] : [1, 0, -2.7]} />
            <pointLight intensity={0.3} position={isMobile ? [1, -1.1, -1] : [1, 0, -1.2]} />
            <pointLight intensity={0.3} position={isMobile ? [-0.25, -1.05, -3] : [0, 0.2, -3.5]} />
            <pointLight intensity={0.5} position={isMobile ? [-1.3, -0.4, -1.6] : [-1.5, 0.4, -1.8]} />
            <primitive
                object={winter.scene}
                scale={isMobile ? 0.44 : 0.5}
                // scale={0.55}
                position={isMobile ? [0, -3, 0] : [0, -2.25, 0]}
                rotation={[0, 0, 0]}
            />
        </mesh>
    )
}

const WinterCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value for 'isMobile'
        setIsMobile(mediaQuery.matches);

        // Define a callback function
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameLoop="demand"
            shadows
            castShadow
            camera={{ position: [17, 3, 15], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Winter isMobile={isMobile} />
                <Snow isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas >
    );
};

export default WinterCanvas;