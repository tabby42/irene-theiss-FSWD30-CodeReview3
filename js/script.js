var name = document.getElementsByName("name")[0];
var age = document.getElementsByName("age")[0];
var country = document.getElementsByName("country")[0];
var horsepower = document.getElementsByName("horsepower")[0];



function calculateInsurance() {
	return parseInt(horsepower.value) * 100 / parseInt(age.value) + 150;
}

function showResult () {
	var rate = calculateInsurance().toFixed(2);
	document.getElementById("msg").innerHTML = 
	"Hi " + String(name.value) + " from " + country.options[country.selectedIndex].text + "!<br>Your rate would be €" + rate + "!";
}


document.getElementById("submit").addEventListener("click", showResult);