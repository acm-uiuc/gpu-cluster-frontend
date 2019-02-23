import React, { Component } from 'react';
import './Frameworks.css'
import Framework from './framework/Framework.js'

class Grid extends Component {
    renderFramework(f, d) {
        return <Framework disabled={this.props.disabled} framework={f} onClickHandler={this.props.handler} loadingGif={this.props.loadingGif} docker={d}/>
    }

    render() {
        var frameworks = []
        for (var f = 0; f < this.props.frameworks.length; f++) {
            var docker = false;
            if (this.props.frameworks[f].name==='Dockerfile'){
                docker = true;
            }
            frameworks.push(this.renderFramework(this.props.frameworks[f], docker));
        }
        return (
            <div className="Frameworks">
                {frameworks}
            </div>
        );
    }
}

export default Grid;
