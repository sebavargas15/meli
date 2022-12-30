"use strict";
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snap = document.getElementById("snap");
const errorMsgElement = document.querySelector("span#errorMsg");

const constraints = {
  audio: false,
  video: {
    width: 380,
    height: 800,
    facingMode: { exact: "environment" },
  //  aspectRatio: 0.4634146341463415
  }
  //   video: {
  //     facingMode: { exact: "environment" },
  //     width: screen.width,
  //     height: screen.height,
  //     frameRate: { max: 30 },
  //     aspectRatio: 0.4634146341463415
  //   }
};

// Access webcam
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  }
}
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}
init();
var context = canvas.getContext("2d");
snap.addEventListener("click", function () {
  context.drawImage(video, 0, 0, 640, 480);
});
