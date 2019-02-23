// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// ----
// GeneratedColor class
class GeneratedColor extends Component {

    onNewColor() {
        this.props.colorHistory( this.props.random );
        this.props.randomColor();
    }

    render() {
        return (
            <div 
                style={{ backgroundColor: this.props.random }}
                id="generated_color" 
                className="col-lg-12 d-flex justify-content-center align-items-center"
            >
                <div className="bg-white p-5 pb-3 text-center">
                    <button onClick={() => this.onNewColor() }
                    className="btn btn-block btn-primary p-3 mb-2">
                        Generate A New Random Color
                    </button>
                    <span className="text-muted">{this.props.random}</span>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ random }) {
    return { random };
}


// -----
// Export
export default connect( mapStateToProps, actions )( GeneratedColor );