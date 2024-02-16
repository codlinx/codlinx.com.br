var i = 0;
var txt = 'Codlinx';
var speed = 150;

function typeWriter() {
    if(i == 0) document.getElementById("titleDrawing").textContent = '';

  if (i < txt.length) {
    document.getElementById("titleDrawing").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()