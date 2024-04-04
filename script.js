// RGB Colors
document.getElementById("previewBtn").addEventListener("click", rgb);

// function
function rgb() {
  // input
  let n1 = +document.getElementById("num1").value;
  let n2 = +document.getElementById("num2").value;
  let n3 = +document.getElementById("num3").value;

  // process
  let myColor = `rgb(${n1}, ${n2}, ${n3})`;

  // output
  document.getElementById("display").style.background = myColor;
  document.getElementById("colour").innerHTML = myColor;
}

document.getElementById("black").addEventListener("click", bl);

// function

function bl() {
  document.getElementById("display").style.backgroundColor = "black";
  document.getElementById("colour").innerHTML =  'rgb(0,0,0)'

}

document.getElementById("white").addEventListener("click", wh);

function wh() {
  document.getElementById("display").style.backgroundColor = "white";
  document.getElementById("colour").innerHTML = 'rgb(255,255,255)'
  
  
}
