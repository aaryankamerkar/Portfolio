import Particles from "react-tsparticles";

export default function ParticleBackground() {

  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 70,
          },
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
        },
      }}
    />
  );
}