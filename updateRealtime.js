// Update preview
function preview() {
	let html = document.getElementById("html").value;
	let css = "<style>" + document.getElementById("css").value + "</style>";
	let javascript = "<scri" + "pt>" + document.getElementById("javascript").value + "</scri" + "pt>";
	let frame = document.getElementById("preview-window").contentWindow.document;
	frame.open();
	frame.write(html + css + javascript);
	frame.close();
}
