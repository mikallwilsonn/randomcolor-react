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
                    <small className="card-text m-0 text-center">
                        <code className="text-theme-dark-faded">{value}</code>
                    </small>

                    <div class="dropdown">
                        <button className="dropdown-toggle bg-light text-secondary" type="button" id={`dropdown-${value}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"/></svg>
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