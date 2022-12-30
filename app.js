"use strict";

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snap = document.getElementById("snap");
const errorMsgElement = document.querySelector("span#errorMsg");

const aspectRatioo = settings.width / settings.height;

const constraints = {
  audio: false,
  //   video: {
  //     width: {
  //       min: 390,
  //       ideal: 1920,
  //       max: 2560,
  //     },
  //     height: {
  //       min: 720,
  //       ideal: 1080,
  //       max: 1440
  //     },
  //     facingMode: { exact: 'environment' }
  //   }
  video: {
    facingMode: { exact: "environment" },
    width: screen.width,
    height: screen.height,
    frameRate: { max: 30 },
    aspectRatio: 0.4634146341463415
  }
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

// Success
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

// Load init
init();

// Draw image
var context = canvas.getContext("2d");
snap.addEventListener("click", function () {
  context.drawImage(video, 0, 0, 640, 480);
});
