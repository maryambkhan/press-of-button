// mouse over and mouse out
const imgTag = document.getElementById('img');


function setNewImage(){
  imgTag.src = "images/cat2.jpg";
  console.log("Mouse Over");
}

imgTag.addEventListener("mouseover", setNewImage);

function setOldImage(){
  imgTag.src = "images/cat1.jpg";
  console.log("Mouse Out");
}

imgTag.addEventListener("mouseout", setOldImage);
