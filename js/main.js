document.getElementsByTagName("html")[0].style.fontSize=(window.innerWidth/640)*100+"px";

var menuflag = 1;
function Openmenu(){
	var but = document.getElementById("menushow");
	if(menuflag == 1){
		but.style.display = "block";
		menuflag = 0;
	}else{
		but.style.display = "none";
		menuflag = 1;
	}
}
