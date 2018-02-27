import React, {Component} from 'react';
import './Framework.css'

class Framework extends Component {
    render() {
	console.log(this.props.disabled);
        if (this.props.selected) {
            return (
                <button className="confirm" onClick={() => this.props.onConfirmHandler(this.props.framework)}>Launch</button>
            )
        } else {
            return (
                <button className="Framework" onClick={() => this.props.onSelectHandler(this.props.framework, this.props.idx)} disabled={this.props.disabled || this.props.framework.disabled}>
                    <img className="logo" src={this.props.framework.loading ? this.props.loadingGif : this.props.framework.img} alt=""/>
                    <div className="label"> 
                        <span className="name">{this.props.framework.name}</span>
                        <span className="details">{this.props.framework.details}</span>
                    </div>
                </button>
            )
        }

    }
}

export default Framework;
