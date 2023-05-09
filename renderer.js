const { ipcRenderer } = require('electron');

ipcRenderer.on('app-version', function(event, appVersion) {
  const versionElement = document.getElementById('version');
  versionElement.innerText = appVersion;
});
