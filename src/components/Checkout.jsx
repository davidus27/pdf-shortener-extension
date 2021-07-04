import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Checkout extends Component {

  handleClick() {
    // send signal to the background script
    // redirect to the loading page
    console.log('TEST');
  }

  render() {
    return (
        <div className="App-header" id="pdf-found-div">
        <div className="position-absolute top-0 start-50 translate-middle-x">
            <h1 className="text-center display-5">PDF found</h1>
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
