import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Etudiant en programmation informatique",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
