import { Office } from "./Devroom";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";
import { useFrame, useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree(); // Get viewport from useThree()

  const isMobile = window.innerWidth < 770;  // Start updating responsiveness
  const responsiveRatio = viewport.width / 14; // Use viewport.width
  // Set the smallest and largest the room could scale to
  const devroomScaleRatio = Math.max(0.35, Math.min(0.85 * responsiveRatio, 0.85));

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  // When menuOpened changes, run this:
  useEffect(() => {
    // Function from framer-motion
    animate(cameraPositionX, menuOpened ? 5 : 45, {
      type: "string",
      mass: 5,
      stiffness: 500,
      damping: 55,
      restDelta: 0.0001,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      type: "string",
      mass: 5,
      stiffness: 500,
      damping: 55,
      restDelta: 0.0001,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  const scale = menuOpened
    ? [devroomScaleRatio * 0.65, devroomScaleRatio * 0.65, devroomScaleRatio * 0.65]
    : [devroomScaleRatio, devroomScaleRatio, devroomScaleRatio]; // Adjust the scale based on menuOpened

  // Adjust the position based on menuOpened and isMobile
  const position = menuOpened
    ? [isMobile ? 2.5 : 7.5 * devroomScaleRatio, isMobile ? -viewport.height / 6 : 0, isMobile? 2 : 4]
    : [isMobile ? 2.0 : 10 * devroomScaleRatio, isMobile ? -viewport.height / 6 : 0, isMobile ? 2 : 3];

  // const orbitControls = isMobile ? null : (
  //     <OrbitControls
  //       enableDamping
  //       dampingFactor={0.25}
  //       target={[1, 2.5, 4.5]}
  //       initialPosition={[40, 20, 20]}
  //       enableZoom={false}
  //       enableRotate={false}
  //       enablePan={false}
  //     />
  // );

  const officePosition = isMobile ? [0, -5, -1.2] : [0, -0.5, -1.2];
  const avatarPosition = isMobile ? [-0.6, -4, -2.7] : [-0.6, 0.6, -2.7];
    
  return (
    <>
      <motion.group
        position={position}
        scale={scale}
        animate={{
          y: isMobile ? -viewport.height / 8 : 0,
        }}
      >
        <ambientLight intensity={1} />

        <Office 
          position={officePosition}
          rotation={[0, -Math.PI / 10, 0]}
        />
        <Avatar         
        scale={[2.5, 2.5, 2.5]}  // Increase size by scaling up
        position={avatarPosition}  
        rotation={[0, -Math.PI / 1.2 , 0]}  // Rotate 45 degrees around the Y axis
        />

      </motion.group>
    </>
  );
};
