// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// ----
// GeneratedColor class
class PrimaryColor extends Component {

    render() {
        return (
            <div className="col-lg-12 row m-0 p-0 flex-nowrap">
                <div 
                    id="primary_color"
                    className="col-lg-4 d-flex justify-content-center align-items-center" 
                    style={{ backgroundColor: this.props.primary || '#FFF' }}
                ></div>
                <div 
                    id="secondary_color"
                    className="col-lg-4 d-flex justify-content-center align-items-center" 
                    style={{ backgroundColor: this.props.secondary || '#7F7F7F' }}
                ></div>
                <div 
                    id="tertiary_color"
                    className="col-lg-4 d-flex justify-content-center align-items-center" 
                    style={{ backgroundColor: this.props.tertiary || '#000' }}
                ></div>
            </div>

        );
    }
}


function mapStateToProps({ primary, secondary, tertiary }) {
    return { primary, secondary, tertiary };
}

// -----
// Export
export default connect( mapStateToProps, actions )( PrimaryColor );