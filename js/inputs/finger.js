// //finger input stuff goes here
// //we are gonna have to figure out how to incorporate
// //mediapipe's own update logic smoothly with the p5 draw
//
// //mediapipe hand tracking example here:
// //https://il41.github.io/netdance/spring.html
// const videoElement = document.getElementsByClassName('input_video')[0];
// const canvasElement = document.getElementsByClassName('output_canvas')[0];
// const canvasCtx = canvasElement.getContext('2d');
// let myArray = [];
// let lmArr = [];
// canvasCtx.translate(1280, 0);  //these 2 lines
// canvasCtx.scale(-1, 1);      //help flip the camera feed
// function onResults(results) {
//   // console.log(results);
//   canvasCtx.save();
//   canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//   canvasCtx.drawImage(
//   results.image, 0, 0, canvasElement.width, canvasElement.height);
//   if (results.multiHandLandmarks) {
//     myArray = [];
//     // console.log(myArray);
//     for (const landmarks of results.multiHandLandmarks) {
//       myArray.push(landmarks);
//       // console.log(HAND_CONNECTIONS, "jo");
//       // drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
//       //                {color: '#00FF00', lineWidth: 5});
//       // drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
//     }
//     lmArr = myArray;
//   }
//   canvasCtx.restore();
// }
//
// const hands = new Hands({locateFile: (file) => {
//   return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
// }});
// hands.setOptions({
//   maxNumHands: 2,
//   minDetectionConfidence: 0.5,
//   minTrackingConfidence: 0.5
// });
// hands.onResults(onResults);
// const camera = new Camera(videoElement, {
//   onFrame: async () => {
//     await hands.send({image: videoElement});
//   },
//   width: 1280,
//   height: 720
// });
// camera.start();
//
//
//
// /* global keyIsPressed, key */
// window.inputs.finger = {
//   name: 'finger',
//   condition: function () {
//     if (keyIsPressed) {
//       return true
//     } else {
//       return false
//     }
//   },
//   update: function () {
//     //get the landmark
//     landmark = lmArr[0][7];
//     window.input.x = window.width-landmark.x*window.width;
//     window.input.y = landmark.y*window.height;
//   }
// }
