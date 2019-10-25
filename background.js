
chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled...');
    // create alarm after extension is installed / upgraded
    chrome.alarms.create('refresh', { periodInMinutes: 60 });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    helloWorld();
  });
  
  function helloWorld() {
    alert("Now, time to refesh!!");
  }