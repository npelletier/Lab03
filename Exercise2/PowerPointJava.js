let index = 0
let pictureList = ["https://cdn.pixabay.com/photo/2015/04/04/19/13/one-706897_960_720.jpg", "https://cdn.pixabay.com/photo/2015/04/04/19/13/two-706896_960_720.jpg", "https://cdn.pixabay.com/photo/2015/04/04/19/13/three-706895_960_720.jpg", "https://cdn.pixabay.com/photo/2015/04/04/19/13/four-706894_960_720.jpg", "https://cdn.pixabay.com/photo/2015/04/04/19/13/five-706893_960_720.jpg"]

function nextPicture()
{
  index = (index+1) % pictureList.length;
  document.getElementById("Pictureloc").src = pictureList[index]
}

function lastPicture()
{
  if(index == 0)
  {
    index = pictureList.length-1;
  }
  else{
  index = (index-1);
  }
  document.getElementById("Pictureloc").src = pictureList[index]
}
