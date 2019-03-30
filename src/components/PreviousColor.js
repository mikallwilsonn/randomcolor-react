// ----
// Dependencies
import React, { Component } from 'react';


// ----
// PreviousColor class
class PreviousColor extends Component {
    render() {
        const { value } = this.props;
        return (
            <div className="card col-auto previous-color p-0 m-2">
                <div className="col-auto" style={{ backgroundColor: value, height: '125px' }} >&nbsp;</div>
                <div className="card-body p-3 m-0 text-center">
                    <p className="card-text text-center">{value}</p>
                </div>
            </div>
        );
    }
}


// ----
// Export
export default PreviousColor;
