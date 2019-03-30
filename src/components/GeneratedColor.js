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
                        Generate A New Color
                    </button>

                    <div className="col-lg-12 m-0 mt-2 row flex-nowrap justify-content-between align-items-center">
                        <span className="text-muted">{this.props.random}</span>

                        <div class="dropdown">
                            <button className="dropdown-toggle bg-light text-secondary" type="button" id={`dropdown-${this.props.random}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="352" height="448" viewBox="0 0 352 448">
                                    <path fill="#CCC" d="M96 184v48c0 13.25-10.75 24-24 24h-48c-13.25 0-24-10.75-24-24v-48c0-13.25 10.75-24 24-24h48c13.25 0 24 10.75 24 24zM224 184v48c0 13.25-10.75 24-24 24h-48c-13.25 0-24-10.75-24-24v-48c0-13.25 10.75-24 24-24h48c13.25 0 24 10.75 24 24zM352 184v48c0 13.25-10.75 24-24 24h-48c-13.25 0-24-10.75-24-24v-48c0-13.25 10.75-24 24-24h48c13.25 0 24 10.75 24 24z"></path>
                                </svg>
                            </button>

                            <div className="dropdown-menu" aria-labelledby={`dropdown-${this.props.random}`}>
                                <button 
                                    className="dropdown-item" 
                                    onClick={()=> this.props.setPrimary( this.props.random )}
                                >Set As Primary</button>

                                <button 
                                    className="dropdown-item" 
                                    onClick={()=> this.props.setSecondary( this.props.random )}
                                >Set As Secondary</button>

                                <button 
                                    className="dropdown-item" 
                                    onClick={()=> this.props.setTertiary( this.props.random )}
                                >Set As Tertiary</button>

                            </div>
                        </div>
                    </div>
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