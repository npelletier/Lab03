// let sampleText = docuement.getElementById("SampleText");
function changeBorder()
{
  document.body.style.border = "blue";
}

function changeBackground()
{
  var color = rgb(document.getElementById("RedBackground").value, document.getElementById("BlueBackground").value, document.getElementById("GreenBackground").value);
  //document.body.style.backgroundColor = "red";
  //docuement.getElementById("SampleText").style.backgroundColor = "red";
  document.body.style.backgroundColor = color;
}
