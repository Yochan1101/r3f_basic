import { Canvas } from "@react-three/fiber";
import "./App.css";
import ThreeElement from "./ThreeElement";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <>
      <Canvas
        // orthographic
        camera={{
          fov: 75,
          near: 1,
          far: 100,
          position: [5, 5, 5],
          // zoom: 100,
        }}
      >
        <color attach={"background"} args={["white"]} />
        <OrbitControls /> // 자유로운 회전이 가능하도록 하는 제약을 줄 수 있는
        args가 존재 문서 찾아보면됨 개발할때는 쓸일 없을듯, 사용자에게 어느
        화면은 안보여주고 싶거나 할때 사용
        <axesHelper args={[6]} /> // xyz축이 보이도록 하는
        <gridHelper args={[10, 10]} /> // 말그대로 화면에 그리드를 그려줌
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;

// camera 옵션 NEAR(카메라 중간), FAR(카메라 맨끝), FOV(확대, 각도 나타냄),

// perspective camera (원근 카메라, 투시카메라) pov를 사용하여 zoom
//orthographic camera (직교 카메라, 직교투시카메라) 2D zoom을 사용하여 확대
