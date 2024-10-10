import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
// import { useRef } from "react";

export default function ThreeElement() {
  // const { size, gl, scene, camera } = useThree();
  // const boxRef = useRef<THREE.Mesh>(null);

  // useFrame((state, delta) => {
  //   // boxRef.current.rotation.x += delta;
  //   // boxRef.current.position.y += delta;
  //   // boxRef.current.position.x += delta;
  // });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), 0]} // 매쉬안에 있는 박스 각도 변경
        position={[2, 0, 0]} // 매쉬안에서 어디에 위치할지
        scale={[1, 6, 1]} // 크기 변경
      >
        <boxGeometry />1
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}

// 매초마다 프레임을 제공
