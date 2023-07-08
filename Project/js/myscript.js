

//To enable Login & Sign Up buttons.
function enableCheckbox(){
	if(document.getElementById("checkbox").checked){
		document.getElementById("Btn").disabled=false;
	}else{
	   document.getElementById("Btn").disabled=true;
	}
}
//To enable Save button.
function enableCheckbox1(){
	if(document.getElementById("checkbox1").checked){
		document.getElementById("Btn1").disabled=false;
	}else{
	   document.getElementById("Btn1").disabled=true;
	}
}
//To enable Pay button.
function enableCheckbox2(){
	if(document.getElementById("checkbox2").checked){
		document.getElementById("Btn2").disabled=false;
	}else{
	   document.getElementById("Btn2").disabled=true;
	}
}
//Link to the srore
function store(){
	
		window.location.href="index.php ";
}

/*
function Login(){
	
		window.location.href="payment.html";
}

function Signup(){
	
		window.location.href="payment.html";
}

*/
