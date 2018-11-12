//vse zunanje linke odpre v native browser-ju 
 const shell = require('electron').shell;

  $(document).on('click', 'a[href^="http"]', function(event) {
	event.preventDefault();
	shell.openExternal(this.href);
});

// open pdf in new window
function pdf() {
	const electron = require('electron')
	const { BrowserWindow } = electron.remote
	const window = new BrowserWindow({
		width: 1200,
		height: 900,
	});

	window.loadURL('file://' +__dirname + '/flipbook/samples/magazine/index.html')
};