// Your Code Here...

let boxTop = 200;
let boxLeft = 200;

document.addEventListener("keydown", alterBox);

function alterBox() {
  // alter box position bsed on up/down arrow keydown
  // keyCode for up arrow == 38; down arrow == 40
  if (event.keyCode == 38 || event.keyCode == 40) {
    if (event.keyCode == 38) {
      boxTop -= 10;
    } else if (event.keyCode == 40) {
      boxTop += 10;
    }
    document.getElementById("box").style.top = boxTop + "px";
  }
  // alter box position bsed on left/right arrow keydown
  // keyCode for left arrow == 37; right arrow == 39
  else if (event.keyCode == 37 || event.keyCode == 39) {
    if (event.keyCode == 37) {
      boxLeft -= 10;
    } else if (event.keyCode == 39) {
      boxLeft += 10;
    }
    document.getElementById("box").style.left = boxLeft + "px";
  }
}
