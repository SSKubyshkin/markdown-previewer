function output() {
	var text = document.getElementById("input").value;
	var converter = new showdown.Converter();

	converter.setOption("tables", true);
	text = converter.makeHtml(text);

	document.getElementById("output").innerHTML = text;
}
