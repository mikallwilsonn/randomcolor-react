// -----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// -----
// Child Components
import PreviousColor from './PreviousColor';


// -----
// Menu class
class Menu extends Component {

    isTypingPrimary( value ) {
        this.props.setPrimary( value );
    }

    isTypingSecondary( value ) {
        this.props.setSecondary( value );
    }

    isTypingTertiary( value ) {
        this.props.setTertiary( value );
    }

    renderColorHistory() {
        if ( this.props.history.length < 1 ) {
            return (
                <p className="text-secondary col-lg-12 p-3">
                    Generate a new color to add the current color to the History.
                </p>
            );
        } else {
            return this.props.history.map( color => {
                return <PreviousColor key={color} value={color} />
            });
        }
    }

    render() {
        return (
            <div 
                id="menu"
                className="bg-white col-lg-3 m-0 p-0"
            >
                <div
                    className="col-lg-12 text-center p-5"
                    id="menu__site-name"
                >  
                    <h1 className="h2">AimlessHues</h1>
                    <h2 className="h6 text-muted">Quickly generate random colors.</h2>
                    <span className="text-muted">Created by <a href="https://github.com/mikallwilsonn/" target="_blank" rel="noopener noreferrer">Michael R. Wilson</a></span>
                </div>



                <div className="accordion col-lg-12" id="accordionMenu">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#settings" aria-expanded="true" aria-controls="settings">
                                    <strong>
                                        Contrast Colors
                                    </strong>
                                </button>
                            </h2>
                        </div>

                        <div id="settings" className="col-lg-12 collapse show" aria-labelledby="headingOne" data-parent="#accordionMenu">
                            <div className="card-body col-lg-12 d-flex flex-column">

                                <p className="text-muted">Enter any valid CSS color value: hex, rgb, rgba, hsl, or hsla</p>

                                <div className="bg-white d-flex flex-column text-left">
                                    <strong className="text-secondary">
                                        Primary <span className="text-muted">(1)</span>
                                    </strong>
                                    <input 
                                        className="p-2 mt-1 form-control" 
                                        type="text" 
                                        placeholder="Example: #DDD" 
                                        onChange={( event ) => this.isTypingPrimary( event.target.value )}
                                        value={this.props.primary || ''} 
                                        style={{ border: `4px solid ${this.props.primary || '#DDD'}` }}
                                    />
                                </div>

                                <div className="mt-4 bg-white d-flex flex-column text-left">
                                    <strong className="text-secondary">
                                        Secondary <span className="text-muted">(2)</span>
                                    </strong>
                                    <input 
                                        className="p-2 mt-1 form-control" 
                                        type="text" 
                                        placeholder="Example: rgb( 125, 75, 20 )" 
                                        onChange={( event ) => this.isTypingSecondary( event.target.value )} 
                                        value={this.props.secondary || ''} 
                                        style={{ border: `4px solid ${this.props.secondary || '#DDD'}` }}
                                    />
                                </div>

                                <div className="mt-4 bg-white d-flex flex-column text-left">
                                    <strong className="text-secondary">
                                        Tertiary <span className="text-muted">(3)</span>
                                    </strong>
                                    
                                    <input 
                                        className="p-2 mt-1 form-control" 
                                        type="text" 
                                        placeholder="Example: hsl( 50, 10%, 80% )" 
                                        onChange={( event ) => this.isTypingTertiary( event.target.value )} 
                                        value={this.props.tertiary || ''} 
                                        style={{ border: `4px solid ${this.props.tertiary || '#DDD'}` }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0 col-lg-12 row justify-content-between align-items-center">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#history" aria-expanded="false" aria-controls="history">
                                    <strong>
                                        History
                                    </strong>
                                </button>

                                <span class="badge badge-pill badge-secondary">
                                    {this.props.history.length}
                                </span>
                            </h2>
                        </div>

                        <div id="history" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionMenu">
                            <div className="card-body col-lg-12 color-history d-flex row flex-nowrap">
                                {this.renderColorHistory()}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


function mapStateToProps({ history, primary, secondary, tertiary }) {
    return { history, primary, secondary, tertiary };
}


// ----
// Export
export default connect( mapStateToProps, actions )( Menu );