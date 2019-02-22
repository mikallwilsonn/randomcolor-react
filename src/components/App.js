// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Child Components
import Menu from './Menu';
import GeneratedColor from './GeneratedColor';
import PrimaryColor from './PrimaryColor';


// ----
// App class
class App extends Component {
    render() {
        return (
            <div className="main-wrapper col-lg-12 d-flex row m-0 p-0">

                <Menu />

                <div className="col-lg-8 m-0 p-0">
                    <GeneratedColor />
                    <PrimaryColor />
                </div>

            </div>
        );
    }
}


// ----
// Export
export default App;