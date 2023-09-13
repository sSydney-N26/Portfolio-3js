import { OrbitControls } from "@react-three/drei";
import { Office } from "./Devroom";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";
import { useFrame } from "@react-three/fiber";

export const Experience = (props) => {
  const { section, menuOpened } = props;

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  // When menuOpened changes, run this:
  useEffect(() => {
    // Function from framer-motion
    animate(cameraPositionX, menuOpened ? 5 : 45, {
      transition: {
        type: "string",
        mass: 5,
        stiffness: 500,
        damping: 50,
        restDelta: 0.0001,
      },
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      transition: {
        type: "string",
        mass: 5,
        stiffness: 500,
        damping: 50,
        restDelta: 0.0001,
      },
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  const scale = menuOpened ? [0.65, 0.65, 0.65] : [0.95, 0.95, 0.95]; // Adjust the scale based on menuOpened

  return (
    <>
      <OrbitControls
        enableDamping
        dampingFactor={0.25}
        target={[1, 2.5, 4.5]}
        initialPosition={[40, 20, 20]}
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
      <motion.group
        position={menuOpened ? [5.5, 0, 3] : [7.5, 0, 2]}
        scale={scale} 
        animate={{
          y: section === 0 ? -0.5 : -1,
        }}
      >
        <ambientLight intensity={1} />
        <Office />
      </motion.group>
    </>
  );
};
