import React, { Component } from 'react';
import Frameworks from './frameworks/Frameworks.js'
import Nav from './nav/Nav.js'
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {frameworks: 
            [{
                  name:'TensorFlow',
                  details: "Ubuntu 16.04 - Python 3.5 - Jupyter Notebook",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/115px-Tensorflow_logo.svg.png",
                  image: "registry.gitlab.com/acm-uiuc/gpu-cluster-images:tensorflow"
              },
              {
                  name:'Caffe2',
                  details: "Ubuntu 16.04 - Python 3.5 - Jupyter Notebook",
                  img: "https://caffe2.ai/static/logo.svg",
                  image: "registry.gitlab.com/acm-uiuc/gpu-cluster-images:caffe2"
              },
              {
                  name:'PyTorch',
                  details: "Ubuntu 16.04 - Python 3.5 - Jupyter Notebook",
                  img: "http://pytorch.org/static/img/pytorch-logo-dark.svg",
                  image: "registry.gitlab.com/acm-uiuc/gpu-cluster-images:pytorch"
              },
              {
                  name:'Keras',
                  details: "Ubuntu 16.04 - Python 3.5 - Jupyter Notebook",
                  img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Keras_Logo.jpg",
                  image: "registry.gitlab.com/acm-uiuc/gpu-cluster-images:keras"
              },
              {
                  name:'NVIDIA Digits',
                  details: "Ubuntu 16.04 - In Browser GUI",
                  img: "https://www.scan.co.uk/images/3xs/infopages/nvidia-digits.png",
                  image: "nvidia/digits"
              },
              {
                  name:'Caffe',
                  details: "Ubuntu 16.04 - C++ - SSH",
                  img: "http://antmicro.com/images/logos/products-tk-caffe.svg",
                  image: "nvidia/caffe"
              },
              {
                  name:'Dockerfile',
                  details: null,
                  img: "https://cdn.worldvectorlogo.com/logos/docker.svg",
                  image: null
              }]
        };
        this.click = this.click.bind(this);
    }
    
    click(f) {
        //RETURN THE SELECTION TO SERVER 
        console.log(f)
    }
    
    render() {
        return (
              <div className="GPU-CLUSTER-FRONTEND">
                  <Nav/> 
                  <Frameworks frameworks={this.state.frameworks} handler={this.click}/>
              </div>
        );
    }
}

export default App;
