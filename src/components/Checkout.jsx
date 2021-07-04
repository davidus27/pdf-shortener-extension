import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {sendPDFProcessing} from '../content/content_functions';

class Checkout extends Component {

  getName() {
    const splittedPath = window.location.href.split('/',);
    const pdfName = splittedPath[splittedPath.length - 1];
    if (pdfName.length > 50) {
      return pdfName.slice(0, 5) + "..." + pdfName.slice(-7);
    }
    return pdfName;
  }

  handleClick() {
    // send signal to the background script
    sendPDFProcessing(window.location.href);
  }

  render() {
    return (
        <div id="pdf-found-div">
        <div className="App-header position-absolute top-0 start-50 translate-middle-x">
            <h1 className="text-center display-5">PDF {this.getName()} found </h1>
        </div>
        
        <div className="position-absolute bottom-0 start-50 translate-middle-x">
            <Link to="/Loading">
                <Button id="cut-btn" type="button" className="btn btn-outline-primary" onClick={this.handleClick}>
                    Selected
                </Button>
            </Link>
         
        </div>

    </div>
    );
  }
}

export default Checkout;
