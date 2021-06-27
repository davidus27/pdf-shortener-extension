import React, { Component } from 'react';

class NoDocumentFound extends Component {
  render() {
    return (
        <div id="pdf-not-found-div">
            <div className="text-center position-absolute top-50 start-50 translate-middle">
                <h1 className="text-center">No PDF document found on this site <span role="img" aria-label="Pensive Face" >😔</span></h1>
            </div>
        </div>
    );
  }
}

export default NoDocumentFound;
