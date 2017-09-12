import React, {Component} from 'react';
import './Nav.css'

class Footer extends Component {
    render() {
        return ( 
            <footer class="footer">
                <div class="small-4 medium-4 large-4 columns">
                    <a id="illinois" href="https://illinois.edu" target="_blank">
                        <img class="logo" id="illinois" src="/images/illinois_black.svg"></img>
                    </a>
                </div>
                <div class="small-4 medium-4 large-4 columns">
                    <p>&copy; 2017 ACM@UIUC</p>
                </div>
                <div class="small-4 medium-4 large-4 columns">
                    <a  href="https://github.com/acm-uiuc" target="_blank">
                        <FontAwesome className="fa fa-github logo" id="github" aria-hidden="true"></i>
                    </a>
                    <a  href="https://twitter.com/acmuiuc" target="_blank">
                        <FontAwesome className="fa fa-twitter logo" id="twitter" aria-hidden="true"></i>
                    </a>
                    <a  href="https://www.facebook.com/acmuiuc" target="_blank">
                        <FontAwesome className="fa fa-facebook logo" id="fb" aria-hidden="true"></i>
                    </a>     
                    <a  href="https://medium.com/@acmuiuc" target="_blank">
                        <FontAwesome className="fa fa-medium logo" id="medium" aria-hidden="true"></i>
                    </a>  
                </div>
        </footer>
        )
    }
}

export default Footer;
