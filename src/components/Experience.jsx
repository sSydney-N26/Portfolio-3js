import { OrbitControls } from "@react-three/drei";
import { Office } from "./Devroom";

export const Experience = () => {
  return (
    <>
      <OrbitControls       
        enableDamping
        dampingFactor={0.25}
        target={[0, 3, 4.5]} // Set the camera's initial target to the center
        initialPosition={[40, 20, 20]} // Set the camera's initial position
        // Settings so Users can't zoom, pan or rotate the model.
        enableZoom={false}  
        enableRotate={false}
        enablePan={false}
      />
      <ambientLight intensity={1} />
      <Office />
    </>
  );
};


