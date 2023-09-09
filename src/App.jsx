import { Canvas } from "@react-three/fiber";
import {Scroll, ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface"
//import { useEffect, useState } from "react";

function App() {

  
  return (
    <>
    <Canvas shadows camera={{ position: [32, 15, 30], fov: 12 }}>
      <color attach="background" args={["#fff0f3"]} />
      <ScrollControls pages={6} damping={0.1}>
        
        <Experience />
        
        <Scroll html>
          <Interface />
        </Scroll>  
      </ScrollControls>
    </Canvas>

    </>
  );
}  

export default App;
