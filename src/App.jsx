import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ProgressScreen } from "./components/ProgressScreen";
import { ScrollManager } from "./components/ScrollManager";
import { Nav } from "./components/Navbar";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";


function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <ProgressScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          type: "string",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <Canvas shadows camera={{ position: [40, 15, 35], fov: 10 }}>
          <color attach="background" args={["#fff0f3"]} />
          <ScrollControls pages={5} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {started && <Experience section={section} menuOpened={menuOpened} />}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Nav 
            onSectionChange={setSection} 
            menuOpened={menuOpened} 
            setMenuOpened={setMenuOpened} 
        />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
