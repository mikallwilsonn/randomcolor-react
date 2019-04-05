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
                    <button id="generatebutton" onClick={() => this.onNewColor() }
                    className="btn btn-block btn-primary p-3 mb-2 bg-theme-primary border-none border-0">
                        Generate A New Color
                    </button>

                    <div className="col-lg-12 m-0 mt-2 row flex-nowrap justify-content-between align-items-center">
                        <small className="card-text m-0 text-center">
                            <code className="text-theme-dark-faded">{this.props.random}</code>
                        </small>

                        <div className="dropdown">
                            <button className="dropdown-toggle bg-light text-secondary" type="button" id={`dropdown-${this.props.random}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"/></svg>
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