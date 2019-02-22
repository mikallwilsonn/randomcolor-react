// ----
// Dependencies
import React, { Component } from 'react';


// ----
// GeneratedColor class
class PrimaryColor extends Component {
    render() {
        return (
            <div 
                id="primary_color"
                className="bg-warning col-lg-12 d-flex justify-content-center align-items-center" 
            >
                <div className="bg-white p-5 text-center d-flex flex-column justify-content-center align-items-center">
                    Enter in your own color to compare
                    <input className="p-2 mt-2" type="text" placeholder="Accepts any valid CSS color" />
                </div>
            </div>
        );
    }
}


// -----
// Export
export default PrimaryColor;