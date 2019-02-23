// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// ----
// GeneratedColor class
class PrimaryColor extends Component {

    isTyping( value ) {
        this.props.setPrimary( value );
    }

    render() {
        return (
            <div 
                id="primary_color"
                className="col-lg-12 d-flex justify-content-center align-items-center" 
                style={{ backgroundColor: this.props.primary || '#FFF' }}
            >
                <div className="bg-white p-5 text-center d-flex flex-column justify-content-center align-items-center">
                    Enter in a color value for contrast comparison.
                    <input 
                        className="p-2 mt-2 form-control" 
                        type="text" 
                        placeholder="Accepts any valid CSS color value" 
                        onChange={( event ) => this.isTyping( event.target.value )}
                    />
                </div>
            </div>
        );
    }
}


function mapStateToProps({ primary }) {
    return { primary };
}

// -----
// Export
export default connect( mapStateToProps, actions )( PrimaryColor );