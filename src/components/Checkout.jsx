import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
        <div id="pdf-found-div">
        <div className="position-absolute top-0 start-50 translate-middle-x">
            <h1 className="text-center display-5">PDF found</h1>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x">
            <button id="cut-btn" type="button" className="btn btn-outline-primary">
                Cut highlighted
            </button>
        </div>
    </div>
    );
  }
}

export default Checkout;
