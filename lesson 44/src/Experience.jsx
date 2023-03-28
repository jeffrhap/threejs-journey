import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";

export default function Experience() {
  const { perfVisible } = useControls({
    perfVisible: false,
  });

  const { position } = useControls({
    position: {
      value: { x: -2, y: 0 },
      min: -4,
      max: 4,
      step: 0.01,
      joystick: "invertY",
    },
  });

  return (
    <>
      {perfVisible ? <Perf position="top-left" /> : null}

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position={[position.x, position.y, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
