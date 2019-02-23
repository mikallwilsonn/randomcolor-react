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
                    <h2 className="h6 text-muted">Generate random HEX colors.</h2>
                    <span className="text-muted">Created by <a href="https://github.com/mikallwilsonn/" target="_blank" rel="noopener noreferrer">Michael R. Wilson</a></span>
                </div>

                <div
                    id="menu_color-history"
                    className="bg-light p-2 pb-5 col-lg-12 d-flex flex-wrap justify-content-center align-items-center"
                >
                    {this.renderColorHistory()}
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