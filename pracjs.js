function start() {
	window.location.href="file:///C:/Users/Purav%20Shah/Google%20Drive/web/practice1.html"
}

function next() {
	var day = document.getElementById('favorite_day');
	var dayChoice = day.options[day.selectedIndex].text;
	var type = document.getElementById("foodType").value
	window.location.href="file:///C:/Users/Purav%20Shah/Google%20Drive/web/practice2.html"
}

function end() {
	// none of the methods i tried to get the radio input worked so i just got rid of the code for it :(
	var zip = document.getElementById('zipCode');
	window.location.href="file:///C:/Users/Purav%20Shah/Google%20Drive/web/practice3.html"
}

window.onload = function () {
	document.getElementById('results').innerHTML= type + " " + day + " " + zip;
}