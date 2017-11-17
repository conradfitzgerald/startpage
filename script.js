var x = document.cookie.split("=")[1];
var dom = document.getElementById("notepad");

function writeNotes() {
	dom.value = x;
}

function writeCookie() {
	var cookie = dom.value;
	console.log(dom.value);
	document.cookie = "note=" + cookie + "; expires=Thu, 18 Dec 2020 12:00:00 UTC";
}

