import * as THREE from "three";

export default function ThreeElement() {
  return (
    <>
      <directionalLight position={[0, 5, 5]} />
      <mesh
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(45),
          0,
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}
