import React, { useEffect } from "react";

// let actx = new AudioContext();
// const ctx = canvas.getContext("2d");
// let audioSource;
// let analyser;

export default function AudioVisualizer(){
    useEffect(()=>{
        test = new SceneInit("myThreeJsCanvas");
    })
    return(
        <div>sumthin
            <canvas id='myThreeJsCanvas'></canvas>
        </div>
    )
}

// export default function AudioVisualizer() {
//   const audioAnalysis = () => {};

//   return (
//     <div id="container" onClick={audioAnalysis}>
//       <canvas
//         id="canvas1"
//         width={window.innerWidth}
//         height={window.innerHeight}
//       ></canvas>
//       <button>hello</button>
//     </div>
//   );
// }
