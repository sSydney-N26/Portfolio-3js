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
  const devroomScaleRatio = Math.max(0.3, Math.min(0.85 * responsiveRatio, 0.85));

const cameraPositionX = useMotionValue(45); // initial X position
const cameraLookAtX = useMotionValue(0);    // initial lookAt target

useEffect(() => {
  animate(cameraPositionX, menuOpened ? 5 : 45, {
    mass: 4,
    stiffness: 300,
    damping: 30,
    restDelta: 0.0001,
  });
  animate(cameraLookAtX, menuOpened ? 5 : 0, {
    mass: 4,
    stiffness: 300,
    damping: 30,
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
    ? [isMobile ? 2.5 : 8.5 * devroomScaleRatio, isMobile ? -viewport.height / 6 : 0, isMobile? 2 : 4]
    : [isMobile ? 2.0 : 10 * devroomScaleRatio, isMobile ? -viewport.height / 6 : 0, isMobile ? 2 : 3];

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
        <ambientLight intensity={3} />

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
