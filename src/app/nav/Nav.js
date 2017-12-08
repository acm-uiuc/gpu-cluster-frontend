import React, {Component} from 'react';
import './Nav.css'
import FontAwesome from 'react-fontawesome' ;


class Nav extends Component {
    showInstructions() {
        document.getElementById("overlay").style.display = "block";
    }

    off() {
        document.getElementById("overlay").style.display = "none";
    }

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
                        <a id="info" onClick={this.showInstructions}>
                            <FontAwesome name='info-circle' size="2x" className="help logo" id="github" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
                <div id="overlay" onClick={this.off}>
                    <div id="information">
                        <h3> ACM@UIUC GPU Cluster </h3>
                        <p>
                            An easy way to get access to a GPU. Select a framework to get started. Further instructions will be provided after you launch your container.
                        </p>
                        <h4> Rules</h4>
                        <ul>
                            <li>  Store all data in your vault workspace (/vault/[username]) as this will be the only persistant storage on the system </li> 
                            <li>  We can only support two concurrent GPU users, look above to see if there is a free GPU otherwise comeback later </li>
                            <li>  Don't hog time on the cluster </li>
                        </ul>
                        <h4> System Specs </h4>
                        <ul> 
                            <li> Intel(R) Xeon(R) CPU E5-2643 0 @ 3.30GHz </li>
                            <li> 16 GB of RAM </li>
                            <li> 120 GB of SSD Storage </li>
                            <li> 16 TB of RAID0 HDD Storage </li>
                            <li> GTX 980 Graphics Card </li>
                            <li> GTX 1070 Graphics Card </li>
                        </ul>
                        <h4> Common Datasets Available</h4>
                        <ul> 
                            <li>MNIST</li>
                            <li>CIFAR-10</li>
                            <li>CIFAR-100</li>
                            <li>IMAGNET2017-DEC</li>
                            <li>IMAGENET2017-CLS</li>
                            <li>NYU-DEPTH-V2</li>
                        </ul>
                        <p> If you would like to see another common dataset, file an issue here: <a href="https://github.com/acm-uiuc/gpu-cluster">https://github.com/acm-uiuc/gpu-cluster</a> </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;