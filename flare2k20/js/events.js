var evento=0;
function changeevent(eventn){
	var x = document.getElementsByClassName("edt");
	var y = document.getElementsByClassName("eventpage");
	var z = document.getElementsByClassName("eventdet");
	y[evento].style.zIndex = "12";
	y[evento].style.height = "0";
	y[evento].style.opacity = "0";
	x[evento].style.backgroundColor = "#D66E19";
	x[evento].style.color = "black";
	evento = eventn;
	if(evento == 0)
	{
		height="200vw";
		heightz = "200vw";
	}
	else if(evento==1)
	{
		height="185vw";
		heightz = "185vw";
	}
	else if(evento==2)
	{
		height="185vw";
		heightz = "185vw";
	}
	z[0].style.height = heightz;
	y[evento].style.zIndex = "13";
	y[evento].style.height = height;
	y[evento].style.opacity = "1";
	y[evento].style.transition = "opacity 2s";
	x[evento].style.backgroundColor = "#5D1813";
	x[evento].style.color = "white";
}