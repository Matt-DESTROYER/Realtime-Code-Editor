// Initialise
let auto = 0;
function get(id) {
	return document.getElementById(id);
}

// Turn autosave on/off
function autosave() {
	let button = get("autosave");
	let html = get("html");
	let css =  get("css");
	let javascript = get("javascript");
	if (auto === 0) {
		auto = 1;
		button.innerHTML = "Auto-preview Off";
		html.oninput = "";
		css.oninput = "";
		javascript.oninput = "";
	} else if (auto === 1) {
		auto = 0;
		button.innerHTML = "Auto-preview On";
		html.oninput = preview();
		css.oninput = preview();
		javascript.oninput = preview();
		preview();
	}
}

// Save the code as index.html
function save() {
	// Create file data
	let html = get("html").value;
	let css = get("css").value;
	let javascript = get("javascript").value;
	let file =  "<!doctype html><html><head><meta charset=\"utf-8\"><title>HTML</title><style>" + css + "</style></head><body>" + html + "</body><script>" + javascript + "</script></html>";
	
	// Download file
	let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file));
	element.setAttribute('download', "index.html");
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
