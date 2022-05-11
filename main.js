let animationLoop; //we will use this variable to clear the setInterval()

function stopAnimate() {
  clearInterval(animationLoop);
  document.getElementById("image").style.backgroundPosition = `-${128}px 0px`;
}
function animateScript() {
  let position = 128; //start position for the image slicer
  const interval = 100; //100 ms of interval for the setInterval()
  const diff = 128; //diff as a variable for position offsett
  animationLoop = setInterval(() => {
    document.getElementById(
      "image"
    ).style.backgroundPosition = `-${position}px 0px`;

    if (position < 1280) {
      position = position + diff;
    }
    //we increment the position by 256 each time
    else {
      position = 128;
    }
    //reset the position to 256px, once position exceeds 1536px
  }, interval); //end of setInterval
} //end of animateScript()
