// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// ----
// PreviousColor class
class PreviousColor extends Component {
    render() {
        const { value } = this.props;
        return (
            <div className="card col-auto previous-color p-0 m-2">
                <div className="col-auto" style={{ backgroundColor: value, height: '125px' }} >&nbsp;</div>
                <div className="card-body col-lg-12 row justify-content-between align-items-center p-3 m-0 text-center flex-nowrap">
                    <small className="card-text m-0 text-center">{value}</small>

                    <div class="dropdown">
                        <button className="dropdown-toggle bg-light text-secondary" type="button" id={`dropdown-${value}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="352" height="448" viewBox="0 0 352 448">
                                <path fill="#CCC" d="M96 184v48c0 13.25-10.75 24-24 24h-48c-13.25 0-24-10.75-24-24v-48c0-13.25 10.75-24 24-24h48c13.25 0 24 10.75 24 24zM224 184v48c0 13.25-10.75 24-24 24h-48c-13.25 0-24-10.75-24-24v-48c0-13.25 10.75-24 24-24h48c13.25 0 24 10.75 24 24zM352 184v48c0 13.25-10.75 24-24 24h-48c-13.25 0-24-10.75-24-24v-48c0-13.25 10.75-24 24-24h48c13.25 0 24 10.75 24 24z"></path>
                            </svg>
                        </button>

                        <div className="dropdown-menu" aria-labelledby={`dropdown-${value}`}>
                            <button 
                                className="dropdown-item" 
                                onClick={()=> this.props.setPrimary( value )}
                            >Set As Primary</button>

                            <button 
                                className="dropdown-item" 
                                onClick={()=> this.props.setSecondary( value )}
                            >Set As Secondary</button>

                            <button 
                                className="dropdown-item" 
                                onClick={()=> this.props.setTertiary( value )}
                            >Set As Tertiary</button>

                            <div className="dropdown-divider"></div>

                            <button 
                                className="dropdown-item" 
                                onClick={()=> this.props.setAsCurrent( value )}
                            >Set As Current</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps() {
    return { };
}

// ----
// Export
export default connect( mapStateToProps, actions )( PreviousColor );