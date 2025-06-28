// Model.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

export default function Model({ url, background = "#0f1012" }) {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 3.5], fov: 35 }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={[background]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Suspense fallback={<Html>Loading...</Html>}>
        <ModelInner url={url} />
      </Suspense>
      {/* <OrbitControls enablePan={false} /> */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

function ModelInner({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} dispose={null} />;
}
useGLTF.preload("/3d/futuristic_building.glb");
useGLTF.preload("/3d/low_poly_building.glb");