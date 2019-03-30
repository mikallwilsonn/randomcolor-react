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
                    className="col-lg-4 p-0" 
                    style={{ backgroundColor: this.props.primary || '#FFF' }}
                ><span className="contrast-tag m-0">1</span></div>
                <div 
                    id="secondary_color"
                    className="col-lg-4 p-0" 
                    style={{ backgroundColor: this.props.secondary || '#7F7F7F' }}
                ><span className="contrast-tag m-0">2</span></div>
                <div 
                    id="tertiary_color"
                    className="col-lg-4 p-0" 
                    style={{ backgroundColor: this.props.tertiary || '#000' }}
                ><span className="contrast-tag m-0">3</span></div>
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