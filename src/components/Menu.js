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
                    className="col-lg-12 text-center p-3"
                    id="menu__site-name"
                >  
                    <div className="bg-white p-3 pt-5 pb-5">
                        <h1 className="h1 font-regular text-theme-dark-faded">AimlessHues</h1>
                        <h2 className="h6 text-muted">Quickly generate random colors.</h2>
                        <span className="text-muted">Created by <a className="font-regular text-theme-dark-faded" href="https://github.com/mikallwilsonn/" target="_blank" rel="noopener noreferrer">Michael R. Wilson</a></span>
                    </div>

                </div>



                <div className="accordion col-lg-12" id="accordionMenu">
                    <div className="card">
                        <div className="card-header p-0 bg-white" id="headingOne">
                            <h2 className="mb-0 p-0">
                                <button className="ml-0 text-decoration-none  btn btn-link h-100 w-100 p-3 text-left" type="button" data-toggle="collapse" data-target="#settings" aria-expanded="true" aria-controls="settings">
                                    <strong className="text-theme-dark-faded">
                                        Set Contrast Colors
                                    </strong>
                                </button>
                            </h2>
                        </div>

                        <div id="settings" className="col-lg-12 collapse" aria-labelledby="headingOne" data-parent="#accordionMenu">
                            <div className="card-body col-lg-12 d-flex flex-column">

                                <p className="text-muted">Enter any valid CSS color value: hex, rgb, rgba, hsl, or hsla</p>

                                <div className="bg-white d-flex flex-column text-left">
                                    <strong className="text-secondary">
                                        Primary <span className="text-muted">(1)</span>
                                    </strong>
                                    <input 
                                        className="p-2 mt-1 form-control font-monospace" 
                                        type="text" 
                                        placeholder="Example: #DDD" 
                                        onChange={( event ) => this.isTypingPrimary( event.target.value )}
                                        value={this.props.primary || ''} 
                                        style={{ borderLeft: `15px solid ${this.props.primary || '#FFF'}` }}
                                    />
                                </div>

                                <div className="mt-4 bg-white d-flex flex-column text-left">
                                    <strong className="text-secondary">
                                        Secondary <span className="text-muted">(2)</span>
                                    </strong>
                                    <input 
                                        className="p-2 mt-1 form-control font-monospace" 
                                        type="text" 
                                        placeholder="Example: rgb( 125, 75, 20 )" 
                                        onChange={( event ) => this.isTypingSecondary( event.target.value )} 
                                        value={this.props.secondary || ''} 
                                        style={{ borderLeft: `15px solid ${this.props.secondary || '#DDD'}` }}
                                    />
                                </div>

                                <div className="mt-4 bg-white d-flex flex-column text-left">
                                    <strong className="text-secondary">
                                        Tertiary <span className="text-muted">(3)</span>
                                    </strong>
                                    
                                    <input 
                                        className="p-2 mt-1 form-control font-monospace" 
                                        type="text" 
                                        placeholder="Example: hsl( 50, 10%, 80% )" 
                                        onChange={( event ) => this.isTypingTertiary( event.target.value )} 
                                        value={this.props.tertiary || ''} 
                                        style={{ borderLeft: `15px solid ${this.props.tertiary || '#000'}` }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header p-0 bg-white" id="headingTwo">
                            <h2 className="mb-0 p-0">
                                <button className="ml-0 text-decoration-none  btn btn-link col-lg-12 h-100 p-3 d-flex row justify-content-between align-items-center" type="button" data-toggle="collapse" data-target="#history" aria-expanded="false" aria-controls="history">
                                    <strong className="pl-0 col-auto text-left text-theme-dark-faded">
                                        History
                                    </strong>
                                    
                                    <span className="col-auto mr-3 text-right badge badge-pill badge-secondary">
                                        {this.props.history.length}
                                    </span>
                                </button>
                            </h2>
                        </div>


                        <div id="history" className="p-0 collapse show" aria-labelledby="headingTwo" data-parent="#accordionMenu">
                            <div className="m-0 card-body col-lg-12 color-history d-flex row flex-nowrap">
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