console.log("Background script is running.");

chrome.action.onClicked.addListener((tab) => {
  console.log("Extension icon was clicked.");
  chrome.tabs.sendMessage(tab.id, { message: "Hello from background!" });
});
