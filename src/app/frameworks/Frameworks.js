import React, { Component } from 'react';
import './Frameworks.css'
import Framework from './framework/Framework.js'

class Grid extends Component {
    renderFramework(f) {
        return <Framework disabled={this.props.disabled} framework={f} onConfirmHandler={this.props.confirm_handler} onSelectHandler={this.props.select_handler} loadingGif={this.props.loadingGif}/>
    }

    render() {
        var frameworks = []
        console.log(this.props.grid)
        for (var f = 0; f < this.props.frameworks.length; f++) {
            frameworks.push(this.renderFramework(this.props.frameworks[f]));
        }

        return (
            <div className="Frameworks">
                {frameworks}
            </div>
        );
    }
}

export default Grid;
