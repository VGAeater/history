window.onresize = window.onload = () => {
	if ( window.innerHeight / window.innerWidth < 1 ) {
		document.getElementById("burger").style.display = "none";
		document.getElementById("normalmenu").style.display = "block";
	} else {
		document.getElementById("burger").style.display = "block";
		document.getElementById("normalmenu").style.display = "none";
	}
};
document.body.onclick = () => {
	document.getElementById("burgermenu").style.display = "none";
};
document.getElementById("hamburger").onclick = e => {
	e.stopPropagation();
	if ( document.getElementById("burgermenu").style.display == "none" ) {
 		document.getElementById("burgermenu").style.display = "block";
 	} else {
 		document.getElementById("burgermenu").style.display = "none";
 	}
};
