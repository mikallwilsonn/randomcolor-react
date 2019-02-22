// ----
// Dependencies
import React, { Component } from 'react';


// ----
// PreviousColor class
class PreviousColor extends Component {
    render() {
        const { value } = this.props;
        return (
            <div className="card col-lg-8 p-0 mt-3">
                <div className="col-lg-12" style={{ backgroundColor: value, height: '125px' }} >&nbsp;</div>
                <div className="card-body p-3 m-0">
                    <p className="card-text">{value}</p>
                </div>
            </div>
        );
    }
}


// ----
// Export
export default PreviousColor;
