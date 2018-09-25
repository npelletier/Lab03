
function validate()
{
  let word1 = document.getElementById("Password").value
  let word2 = document.getElementById("Password2").value
  if(word1==word2)
  {
    if(word1.length<8) {
      alert("Invalid Password. Make sure passwords are 8 characters long")
    }
    else {
      alert("Passwords are valid")
    }
  }
  else
  {
    alert("Passwords do not match. Please try again.")
  }
}
