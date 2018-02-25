import React, { Component } from 'react';
import Frameworks from './frameworks/Frameworks.js';
import Nav from './nav/Nav.js';
import Footer from './footer/Footer.js';
import './App.css';

class App extends Component {
    constructor(props) {
	super(props);
        this.state = {frameworks: this.props.frameworkImages,
                      disableAllButton: false};
	this.loadingGif = "https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif";
	this.click = this.click.bind(this);
	this.api = window.location.protocol+"//"+window.location.href.split('/')[2]
    }
        
    click(f) {
        var updatedFramework = this.state.frameworks
        var type = typeof updatedFramework;
        console.log(type);
        var index = updatedFramework.indexOf(f);
        updatedFramework[index].loading = true;
        this.setState({framework:updatedFramework, disableAllButton:true})

        fetch(this.api + '/create_container', {
                  method: 'POST',
                  headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(f)
          }).then((resp) => resp.json()).then(function(res){
                var log_cluster = browser.history.addUrl({url: window.location, title: "ACM@UIUC - GPU Cluster"})
                log_cluster.then(window.location.replace(res['ui_url'])); 
	        });
          console.log(f)
    }
    
    render() {
	      console.log(this.state.disableAllButton);
	      return (
            <div className="GPU-CLUSTER-FRONTEND">
                <Nav/> 
                <Frameworks disabled={this.state.disableButton} frameworks={this.state.frameworks} handler={this.click} loadingGif={this.loadingGif} />
				        <Footer/>
			      </div>
        );
    }
}

export default App;
