import React, { Component } from 'react';
import Frameworks from './frameworks/Frameworks.js';
import Nav from './nav/Nav.js';
import Footer from './footer/Footer.js';
import './App.css';

class App extends Component {
    constructor(props) {
		super(props);
		
		console.log(this.props.frameworkImages);

        this.state = {frameworks: this.props.frameworkImages,
					  disableButton: false};

        this.click = this.click.bind(this);
    }

        
    click(f) {
	this.setState({framework:this.state.framework, disableButton:true})
	fetch('http://vault.acm.illinois.edu:5656/create_container', {
	    method: 'POST',
	    headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	    },
	    body: JSON.stringify(f)
	}).then((resp) => resp.json()).then(function(res){
	    window.location.replace(res['jupyter_url']); 
	});
        console.log(f)
    }
    
    render() {
	console.log(this.state.disableButton);
	return (
            <div className="GPU-CLUSTER-FRONTEND">
                <Nav/> 
                <Frameworks disabled={this.state.disableButton} frameworks={this.state.frameworks} handler={this.click} />
				<Footer/>
			</div>
        );
    }
}

export default App;
