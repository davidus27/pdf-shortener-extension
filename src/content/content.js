/* global chrome */

import React from 'react';
import ReactDOM from 'react-dom';
import App from "../components/App";

const app = document.createElement('div');
app.id = "my-extension-root";

document.body.appendChild(app);
ReactDOM.render(<App />, app);
app.style.display = "none";


chrome.runtime.onMessage.addListener(
   (request) => {
      if (request.message === "clicked_browser_action") {
        toggle();
      }
   }
);

const toggle = () => {
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
};
