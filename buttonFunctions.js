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