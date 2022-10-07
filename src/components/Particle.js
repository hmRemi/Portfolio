import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          move: {
            enable: true,
            random: true,
            speed: 10,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },

          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
