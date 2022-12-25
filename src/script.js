function output() {
	var text = document.getElementById("input").value;
	text = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
	document.getElementById("output").innerHTML = text;
}
