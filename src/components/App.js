// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux'


// ----
// Child Components
import Menu from './Menu';
import GeneratedColor from './GeneratedColor';
import PrimaryColor from './PrimaryColor';


// ----
// Actions
import * as actions from '../actions';


// ----
// App class
class App extends Component {

    componentDidMount() {
        this.props.randomColor();
    }

    render() {
        return (
            <div className="main-wrapper col-lg-12 d-flex row m-0 p-0">
                <Menu />

                <div id="color-wrapper" className="col-lg-9 m-0 p-0">
                    <GeneratedColor />
                    <PrimaryColor />
                </div>
            </div>
        );
    }
}


// ----
// Export
export default connect( null, actions )( App );
