// Initialise
let auto = 0;

// Turn autosave on/off
function autosave() {
	let button = get("autosave");
	if (auto === 0) {
		auto = 1;
		button.innerHTML = "Auto-preview Off";
	} else if (auto === 1) {
		auto = 0;
		button.innerHTML = "Auto-preview On";
	}
	preview();
}

// Save the code as index.html
function save() {
	// Create file data
	let html = get("html").value;
	let css = get("css").value;
	let javascript = get("javascript").value;
	let file =  `<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>HTML</title>
			<style>${css}</style>
			<script type="text/javascript" defer>${javascript}</script>
		</head>
		<body>
			${html}
		</body>
	</html>`;
	
	// Download file
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file));
	element.setAttribute('download', "index.html");
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
