/* global chrome */

import React from 'react';
import ReactDOM from 'react-dom';
import Frame from 'react-frame-component';
import App from "../App";

class Main extends React.Component {
    render() {
      return (
        <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}>
          <App document={document} window={window} isExt={true}/> 
        </Frame>
    );
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";

document.body.appendChild(app);
ReactDOM.render(<App />, app);

app.style.display = "none";

chrome.runtime.onMessage.addListener(
   function(request) {
      if( request.message === "clicked_browser_action") {
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
