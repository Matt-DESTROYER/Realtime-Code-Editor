// Initialise
let auto = 0;

// Turn autosave on/off
function autosave() {
	let button = document.getElementById("autosave");
	let html = document.getElementById("html");
	let css =  document.getElementById("css");
	let javascript =  document.getElementById("javascript");
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
	}
}

// Save the code as index.html
function save() {
	// Create file contents
	let head = "<!doctype html><html><head><meta charset=\"utf-8\"><title>HTML</title></head>";
	let html = document.getElementById("html").value;
	let css = "<style>" + document.getElementById("css").value + "</style>";
	let javascript = "<scri" + "pt>" + document.getElementById("javascript").value + "</scri" + "pt>";
	let foot = "</body></html>";
	let file =  head + css + "<body>" + html + javascript + foot;
	
	// Download file
	let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file));
	element.setAttribute('download', "index.html");
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
