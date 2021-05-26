var evento=0;
function changeevent(eventn){
	var x = document.getElementsByClassName("ecat");
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
		height="130vw";
		heightz = "140vw";
	}
	else if(evento==1)
	{
		height="70vw";
		heightz = "80vw";
	}
	else if(evento==2)
	{
		height="130vw";
		heightz = "140vw";
	}
	else if(evento==3)
	{
		height="65vw";
		heightz = "75vw";
	}
	else if(evento==4)
	{
		height="80vw";
		heightz = "90vw";
	}
	else if(evento==5)
	{
		height="65vw";
		heightz = "75vw";
	}
	else if(evento==6)
	{
		height="80vw";
		heightz = "90vw";
	}
	else if(evento==7)
	{
		height="80vw";
		heightz = "90vw";
	}
	else if(evento==8)
	{
		height="65vw";
		heightz = "75vw";
	}
	z[0].style.height = heightz;
	y[evento].style.zIndex = "13";
	y[evento].style.height = height;
	y[evento].style.opacity = "1";
	//y[evento].style.transition = "opacity 2s";
	x[evento].style.backgroundColor = "#5D1813";
	x[evento].style.color = "white";
	body.style.
}