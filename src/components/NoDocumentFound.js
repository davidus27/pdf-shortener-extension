import React, { Component } from 'react';

class NoDocumentFound extends Component {
  render() {
    return (
        <div id="pdf-not-found-div">
            <div class="position-absolute top-0 start-50 translate-middle-x">
                <h1 class="text-center">No PDF document found on this site <span role="img" aria-label="Pensive Face" >😔</span></h1>
            </div>
        </div>
    );
  }
}

export default NoDocumentFound;
