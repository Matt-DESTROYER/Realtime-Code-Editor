// Update preview
function preview() {
	if (auto === 0) {
		let html = get("html").value;
		let css = "<style>" + get("css").value + "</style>";
		let javascript = "<script>" + get("javascript").value + "</script>";
		let iframe = get("preview-window").contentWindow.document;
		get("preview-window").src = "about:blank";
		iframe.open();
		iframe.write(html + css + javascript);
		iframe.close();
	}
}
