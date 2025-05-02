import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
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

  // Ref to the HTML overlay container
  const htmlRef = useRef(null);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const element = htmlRef.current;
    if (!element) return;

    // Function to recalculate number of pages
    const measure = () => {
      const height = element.scrollHeight;
      setPages(Math.max(height / window.innerHeight, 1));
    };

    // Initial measure

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(element);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [started]);

  return (
    <>
      <ProgressScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          type: "string",
          mass: 6,
          stiffness: 800,
          damping: 120,
          restDelta: 0.0001,
        }}
      >
        <Canvas shadows camera={{ position: [40, 15, 35], fov: 10 }}>
          <color attach="background" args={["#fff0f3"]} />
          <ScrollControls pages={pages} damping={0.2}>
            <ScrollManager section={section} onSectionChange={setSection} />

            <Scroll>
              <Suspense fallback={null}>
                {started && <Experience section={section} menuOpened={menuOpened} />}
              </Suspense>
            </Scroll>

            <Scroll html>
              <div ref={htmlRef} style={{ position: "relative", width: "100%" }}>
                {started && <Interface setSection={setSection} />}
              </div>
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
