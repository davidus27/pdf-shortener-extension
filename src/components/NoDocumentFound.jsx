import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isPDF } from '../content/content_functions';

class NoDocumentFound extends Component {

    render() {
        if (isPDF()) {
            return (<Redirect to="/Checkout" />);
        }
        return (
            <div className="App-header" id="pdf-not-found-div">
                <div className="text-center position-absolute top-50 start-50 translate-middle">
                    <h1 className="text-center">No PDF document found on this site <span role="img" aria-label="Pensive Face" >😔</span></h1>
                </div>
            </div>
        );
    }
}

export default NoDocumentFound;