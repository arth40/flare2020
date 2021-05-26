function trashit(){
	var trash = document.getElementsByClassName("page");
	var trashback = document.getElementsByClassName("hiddenpage");
	trash[0].style.transform = "rotate(+360deg)";
	//trash[0].style.height = "0";
	//trash[0].style.width = "0";
	trash[0].style.opacity = "0";
	trash[0].style.transitionProperty = "transform, opacity";
	trash[0].style.transitionDuration = "5s,8s";
	trashback[0].style.height ="100vh";
	trashback[0].style.width = "100%";
	trashback[0].style.transitionDelay = "6s";
}