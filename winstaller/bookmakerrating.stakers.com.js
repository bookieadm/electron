var electronInstaller = require('electron-winstaller');
var path = require("path");
resultPromise = electronInstaller.createWindowsInstaller({
	    appDirectory: path.join('temp/Stakers_Bookmakerrating-win32-x64'), //The path of the package file just generated
	    outputDirectory: path.join('./temp/build'), //Output path
	    authors: 'bookie', // author name
	    exe: 'Stakers_Bookmakerrating.exe', //Find the name of the exe in appDirectory
	    noMsi: true, //No need for mis! [write picture description here] (https://img-blog.csdn.net/20180712225817503?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI2NjI2MTEz/font/5a6L5L2T/fontsize/400/fill/I0JBQkdisk /70)
	    setupIcon:'./icon.ico', //The icon file address of the generated exe file
	    setupExe:'stakers_bookmakerrating_bundle.exe',
	    title:'stakers_bookmakerrating', 
	  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
