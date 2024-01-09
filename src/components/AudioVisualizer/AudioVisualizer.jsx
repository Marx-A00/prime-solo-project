import React from "react";
/**
 * FIXME:
 * When you go from Audio to AudioVisualizer, the keyboard stays, should not happen, eventually will probably create new context
 */

export default function AudioVisualizer() {
  let audio1 = new Audio();
  audio1.src = "sound.wav";
  const playAudio = (e) => {
    audio1.play();
  };

  return (
    <div>
      <button onClick={playAudio}>hey</button>
    </div>
  );
}
