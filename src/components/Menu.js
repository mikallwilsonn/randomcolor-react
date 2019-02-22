// -----
// Dependencies
import React, { Component } from 'react';


// -----
// Child Components
import PreviousColor from './PreviousColor';



// -----
// Menu class
class Menu extends Component {

    renderColorHistory() {
        return (
            <PreviousColor value="#45ABF5" />
        );
    }

    render() {
        return (
            <div 
                id="menu"
                className="bg-white col-lg-4 m-0 p-0"
            >
                <div
                    class="col-lg-12 text-center p-5"
                    id="menu__site-name"
                >  
                    <h1 className="h2">AimlessHues</h1>
                    <span className="text-muted">Created by <a href="https://github.com/mikallwilsonn/" target="_blank" rel="noopener noreferrer">@mikallwilsonn</a></span>
                </div>

                <div
                    id="menu_color-history"
                    className="col-lg-12 d-flex flex-wrap justify-content-center align-items-center"
                >
                    {this.renderColorHistory()}
                </div>
            </div>
        );
    }
}


// ----
// Export
export default Menu;