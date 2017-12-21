import React, {Component} from 'react';
import './Footer.css'
import FontAwesome from 'react-fontawesome' ;

class Footer extends Component {
    render() {
        return ( 
            <footer className="footer">
                <div className="small-4 medium-4 large-4 columns">
                    <a id="illinois" href="https://illinois.edu" target="_blank">
                        <img class="logo" id="illinois" src="/new_illinois.svg"></img>
                    </a>
                </div>
                <div className="small-4 medium-4 large-4 columns">
                    <p>&copy; 2017 ACM@UIUC</p>
                </div>
                <div className="small-4 medium-4 large-4 columns logos">
                    <a  href="https://github.com/acm-uiuc" className="logolink" target="_blank">
                        <FontAwesome name='github' size="lg" className="github logo" id="github" aria-hidden="true"/>
                    </a>
                    <a  href="https://twitter.com/acmuiuc" className="logolink" target="_blank">
                        <FontAwesome name='twitter' size="lg" className="twitter logo" id="twitter" aria-hidden="true"/>
                    </a>
                    <a  href="https://www.facebook.com/acmuiuc" className="logolink" target="_blank">
                        <FontAwesome name='facebook' size="lg" className="facebook logo" id="fb" aria-hidden="true"/>
                    </a>     
                    <a  href="https://medium.com/@acmuiuc" className="logolink" target="_blank">
                        <FontAwesome name='medium' size="lg" className="medium logo" id="medium" aria-hidden="true"/>
                    </a>  
                </div>
            </footer>
        )
    }
}

export default Footer; 
