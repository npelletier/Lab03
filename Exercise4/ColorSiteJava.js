"use strict";
function changeBorder()
{
  let redB = document.getElementById("RedBoarder").value;
  let blueB = document.getElementById("BlueBoarder").value;
  let greenB = document.getElementById("GreenBoarder").value;
  let colorB = "rgb("+String(redB)+", "+String(greenB)+","+String(blueB)+")";
  alert(colorB);
  let width = document.getElementById("WidthBoarder").value;
  //document.body.style.backgroundColor = "red";
  document.getElementById("SampleText").style.borderColor = colorB;
  document.getElementById("SampleText").style.borderWidth = colorB;
  //document.body.style.backgroundColor = color;
}

function changeBackground()
{
  let red = document.getElementById("RedBackground").value;
  let blue = document.getElementById("BlueBackground").value;
  let green = document.getElementById("GreenBackground").value;
  let color = "rgb("+String(red)+", "+String(green)+","+String(blue)+")";
  //document.body.style.backgroundColor = "red";
  document.getElementById("SampleText").style.backgroundColor = color;
  //document.body.style.backgroundColor = color;
}
