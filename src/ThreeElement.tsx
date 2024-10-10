import * as THREE from "three";
import { useControls } from "leva";
// import { useFrame, useThree } from "@react-three/fiber";
// import { useRef } from "react";

export default function ThreeElement() {
  // const { size, gl, scene, camera } = useThree();
  // const boxRef = useRef<THREE.Mesh>(null);

  // useFrame((state, delta) => {
  //   // boxRef.current.rotation.x += delta;
  //   // boxRef.current.position.y += delta;
  // });

  const box = useControls({
    roatate: { value: 0, min: -360, max: 360, step: 1 },
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(box.roatate),
          0,
        ]}
      >
        <boxGeometry />1
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}

// 매초마다 프레임을 제공
