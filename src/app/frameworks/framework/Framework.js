import React, {Component} from 'react';
import './Framework.css'

class Framework extends Component {
    render() {
	console.log(this.props.disabled);
        return (
		<button className="Framework" onClick={() => this.props.onClickHandler(this.props.framework)} disabled={this.props.disabled || this.props.framework.disabled}>
                <img className="logo" src={this.props.framework.loading ? this.props.loadingGif : this.props.framework.img} alt=""/>
                <div className="label"> 
                    <span className="name">{this.props.framework.name}</span>
                    <span className="details">{this.props.framework.details}</span>
                </div>
            </button>
        )
    }
}

export default Framework;
