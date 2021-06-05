import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
        <div id="loading-screen">
        <div class="loading-animation text-center position-absolute top-50 start-50 translate-middle">
            <span class="spinner spinner-grow" role="status"></span>
            <div><strong id="loading-txt">Processing PDF file, please wait...</strong></div>
        </div>
        <div id="overlay"></div>
    </div>
    );
  }
}

export default Loading;
