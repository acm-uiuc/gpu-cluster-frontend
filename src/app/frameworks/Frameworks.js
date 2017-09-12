import React, { Component } from 'react';
import './Frameworks.css'
import Framework from './framework/Framework.js'

class Grid extends Component {
    renderFramework(f, t, cl) {
        return <Framework framework={f} onClickHandler={this.props.handler}/>
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