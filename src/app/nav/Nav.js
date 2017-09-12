import React, {Component} from 'react';
import './Nav.css'

class Nav extends Component {
    render() {
        return ( 
            <div className="top-bar nav">
                <div className="desktop">
                    <div className="top-bar-left">
                        <a id="nav-home" href="/">
                            <div id="logo-img">
                                <img src="/logo.svg" className="acm-logo"/>
                            </div>
                            <div id="logo-text">
                                <h3 id="title-text">GPU CLUSTER</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;