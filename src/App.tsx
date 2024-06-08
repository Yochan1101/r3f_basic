import { Canvas } from "@react-three/fiber";
import "./App.css";
import ThreeElement from "./ThreeElement";

function App() {
  return (
    <>
      <Canvas>
        <ThreeElement />
      </Canvas>
      <h1>R3F BASIC</h1>
    </>
  );
}

export default App;
