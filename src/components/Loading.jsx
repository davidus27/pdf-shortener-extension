import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Loading extends Component {

  endLoading() {
    
    return (<Redirect to="/Checkout" />);
  }

  render() {
    return (
        <div id="loading-screen">
        <div className="loading-animation text-center position-absolute top-50 start-50 translate-middle">
            <span className="spinner spinner-grow" role="status"></span>
            <div><strong id="loading-txt">Processing PDF file, please wait...</strong></div>
        </div>
        <div id="overlay"></div>
    </div>
    );
  }
}

export default Loading;
