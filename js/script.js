var fname = document.getElementById("full");
var age = document.getElementsByName("age")[0];
var country = document.getElementsByName("country")[0];
var horsepower = document.getElementsByName("horsepower")[0];

function calculateInsurance() {
	return (parseInt(horsepower.value) * 100) / (parseInt(age.value) + 150);
}

function checkInput () {
	var user = fname.value;
	if (user !== "" && age.value !== "" && horsepower.value !== "") {
		return true;
	} else {
		return false;
	}
}

function showResult () {
	var rate = calculateInsurance().toFixed(2);
	var user = fname.value;
	if (checkInput() && !isNaN(rate) && rate > 0) {
		document.getElementById("msg").innerHTML = 
		"Hi, " + user + " from " + country.options[country.selectedIndex].text 
		+ "!<br>Your rate would be <span class='orange'>€ " + rate + "</span>";
	} else {
		document.getElementById("msg").innerHTML = 
		"Please fill out all the form fields correctly.";
	}
}

if (document.getElementById("submit")) {
	document.getElementById("submit").addEventListener("click", showResult);
}
