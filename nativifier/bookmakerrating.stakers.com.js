var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
    name: 'Stakers_Bookmakerrating', // Client name
    targetUrl: 'https://bookmakerrating.stakers.com', // Which URL do you need to package
    platform: 'win32', // defaults to the current system
    arch: 'x64', // defaults to the current system
    version: '1.0.0',
    out: 'temp',
    overwrite: false,
    asar: false, // see conceal
    icon: './icon.ico',    
    counter: false,
    bounce: false,
    width: 1280,
    height: 800,
    showMenuBar: false,
    fastQuit: false,
    userAgent: 'STKRS-1.0.0', // will infer a default for your current system
    ignoreCertificate: false,
    ignoreGpuBlacklist: false,
    disableGpu: true,
    enableEs3Apis: false,
    insecure: false,
    honest: false,
    zoom: 1.0,
    singleInstance: false,
    clearCache: false,
    fileDownloadOptions: {
      saveAs: true // always show "Save As" dialog
    },
    internalUrls:'(.*?\/pcClient)|(.*?\/user/logout\.php)',
    processEnvs: {
      "GOOGLE_API_KEY": "<your-google-api-key>"
    }
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});
