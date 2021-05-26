var n;
function popupimg(n){
	var popimg = document.getElementsByClassName("popup");
	popimg[n].style.height = "100vh";
	popimg[n].style.width = "100%";
	popimg[n].style.zIndex = "15";
}

function popclose(n){
	var popimg = document.getElementsByClassName("popup");
	popimg[n].style.height = "0";
	popimg[n].style.width = "0";
	popimg[n].style.zIndex = "-1";
}