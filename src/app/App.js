import React, { Component } from 'react';
import Frameworks from './frameworks/Frameworks.js';
import Nav from './nav/Nav.js';
import Footer from './footer/Footer.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {frameworks: this.props.frameworkImages,
                          disableAllButtons: false,
                          framework_selection: new Array(this.props.frameworkImages.length).fill(false),
                          ui_url: null};
        this.loadingGif = "https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif";
        this.select = this.select.bind(this);
        this.confirm = this.confirm.bind(this);
        this.api = window.location.protocol+"//"+window.location.href.split('/')[2];
    }
        
    select(f, i) {
        var updatedFramework = this.state.frameworks;
        var index = updatedFramework.indexOf(f);
        updatedFramework[index].loading = true;
        this.setState({framework:updatedFramework, disableAllButtons:true});

        fetch(this.api + '/create_container', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(f)
            }).then((resp) => resp.json()).then(function(res) {
                selected = this.state.framework_selection;
                selected[i] = true;
                this.setState({framework_selection: selected, ui_url: res['ui_url']}); 
                console.log("container is ready");
            });
    }

    confirm() {
        window.location = this.state.ui_url;
    }
    
    render() {
	      return (
            <div className="GPU-CLUSTER-FRONTEND">
                <Nav/> 
                <Frameworks disabled={this.state.disableAllButtons} frameworks={this.state.frameworks} selected_framework={this.state.framework_selection} confirm_handler={this.confirm} select_handler={this.select} loadingGif={this.loadingGif} />
				<Footer/>
			</div>
        );
    }
}

export default App;
