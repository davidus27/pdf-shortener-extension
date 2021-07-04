/*global chrome */
import { NewDocumentCreator } from './background_functions';


// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(() => {
   // Send a message to the active tab
   chrome.tabs.query({active: true, currentWindow:true}, (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
   });
});

/*
 uploadFile(msg.pdf_name, (event) => {
 const request = event.target;
 console.log('what is:', request);
 const path = request.responseURL.split('/');
 const name = 'copy_' + path[path.length - 1]; 
 downloadFile(request.response, 'application/pdf', name);
*/

chrome.runtime.onConnect.addListener((port) => {
   console.assert(port.name === "connection");
   port.onMessage.addListener((msg) => {

      switch (msg.message) {
         case 'pdf_found':
            const o = new NewDocumentCreator(msg.pdf_name);
            o.initialize().then(() => {
                o.findPages();
            });
            console.log(o);
            break;
         default:
            console.log('Unknown message');
            break
         }
      });
 });