import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
        <div id="pdf-found-div">
        <div class="position-absolute top-0 start-50 translate-middle-x">
            <h1 class="text-center display-5">PDF found</h1>
        </div>
        <div class="position-absolute bottom-0 start-50 translate-middle-x">
            <button id="cut-btn" type="button" class="btn btn-outline-primary">
                Cut highlighted
            </button>
        </div>
    </div>
    );
  }
}

export default Checkout;
