document.getElementById("divpopup").style.display = "none";

window.onload = function()
{
  setTimeout(function()
  {
    document.getElementById("divpopup").style.display = "block";
  }, 10000);
}

function changeColor() 
{
	var p = document.querySelectorAll("p");// police des p en bleue
	var i;
    for (i = 0; i < p.length; i++) {
    	p[i].style.color = "blue"; p[i].style.fontFamily = "Papyrus, Arial" } // police des p en bleue et papyrus


	document.body.style.backgroundColor = "magenta"; // background en magenta


	var h = document.querySelectorAll("h1, h2, h3");// police des h en green + comic sans MS
	var i;
    for (i = 0; i < h.length; i++) {
    	h[i].style.color = "green"; h[i].style.fontFamily = "comic sans MS"}

	return false;
}
