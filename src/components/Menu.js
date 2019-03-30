// -----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';


// -----
// Child Components
import PreviousColor from './PreviousColor';


// -----
// Menu class
class Menu extends Component {

    renderColorHistory() {
        if ( this.props.history ) {
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
                                    Settings
                                </button>
                            </h2>
                        </div>

                        <div id="settings" className="col-lg-12 collapse show" aria-labelledby="headingOne" data-parent="#accordionMenu">
                            <div className="card-body">
                                SETTINGS HERE
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0 col-lg-12 row justify-content-between align-items-center">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#history" aria-expanded="false" aria-controls="history">
                                    History
                                </button>
                                <small className="text-secondary">
                                    {this.props.history.length}
                                </small>
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


function mapStateToProps({ history }) {
    return { history };
}


// ----
// Export
export default connect( mapStateToProps, {} )( Menu );