function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColour;
}

let penColour = 'black';

function setPenColour(pen) {
  penColour = pen;
}

function resetPixel() {
  const pixs = document.querySelectorAll('.pixel');
  for (let ii = 0; ii < pixs.length; ii += 1) {
    pixs[ii].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

