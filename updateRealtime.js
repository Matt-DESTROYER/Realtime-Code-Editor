function get(id) {
	return document.getElementById(id);
}

// Update preview
function preview() {
	if (auto === 0) {
		let html = get("html").value;
		let css = "<style>" + get("css").value + "</style>";
		let javascript = "<script>" + get("javascript").value + "</script>";
		let frame = get("preview-window").contentWindow.document;
		frame.open();
		frame.write(html + css + javascript);
		frame.close();
	}
}
