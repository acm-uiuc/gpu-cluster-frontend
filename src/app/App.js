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
                        ui_url: null,
                        cid: null};
        this.loadingGif = "https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif";
        this.select = this.select.bind(this);
        this.confirm = this.confirm.bind(this);
        this.api = window.location.protocol+"//"+window.location.href.split('/')[2];
    }
        
    select(f) {
        var updatedFramework = this.state.frameworks;
        var index = updatedFramework.indexOf(f);
        updatedFramework[index].loading = true;
        this.setState({framework:updatedFramework, disableAllButtons:true});
        
        fetch('http://localhost:5656/create_container', {
        //fetch(this.api + '/create_container', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(f)
            }).then((resp) => resp.json()).then(data => {
                var loadedFramework = this.state.frameworks;
                loadedFramework[index].loaded = true;
                console.log(data["cid"]);
                this.setState({framework:loadedFramework, cid: data['cid'], ui_url: data['ui_url']})
            });
    }

    confirm() {
        //fetch(this.api + '/confirm', {
        fetch('http://localhost:5656/confirm', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({cid: this.state.cid})
        }).then((resp) => resp.json()).then(data => {
            console.log(data);
            if (data["verified"] == "confirmed") {
                window.location = this.state.ui_url
            }
        });
        
    }
    
    render() {
        return (
            <div className="GPU-CLUSTER-FRONTEND">
                <Nav/> 
                <Frameworks disabled={this.state.disableAllButtons} frameworks={this.state.frameworks} confirm_handler={this.confirm} select_handler={this.select} loadingGif={this.loadingGif} />
				<Footer/>
			</div>
        );
    }
}

export default App;
