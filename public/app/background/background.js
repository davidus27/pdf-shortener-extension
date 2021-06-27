/*global chrome */

// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(function() {
   // Send a message to the active tab
   chrome.tabs.query({active: true, currentWindow:true}, (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
   });
});

chrome.windows.onFocusChanged.addListener((windowId) => {
   console.log('Focused changed!', windowId);
   if (windowId === chrome.windows.WINDOW_ID_NONE) {
      window.close();
   }
})