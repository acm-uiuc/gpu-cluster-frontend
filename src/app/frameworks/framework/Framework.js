import React, {Component} from 'react';
import './Framework.css'

class Framework extends Component {
        
    render() {
        if (this.props.docker){
            var value = document.getElementById("docker_img");
            if (value != null && value.value !== ""){
                console.log(value.value);
                this.props.framework.image = value.value;
                console.log(this.props.framework);
            }
            else{
                this.props.framework.image = null;
            }
            return (
                <button className="Framework" onClick={() => this.props.onClickHandler(this.props.framework)} disabled={this.props.disabled || this.props.framework.disabled}>
                <img className="logo" src={this.props.framework.loading && value.value !=""? this.props.loadingGif : this.props.framework.img} alt=""/>
                <div>
                    <input type="text" name = "docker_img" id = "docker_img" />
                </div>
                <div className="label"> 
                    <span className="name">{this.props.framework.name}</span>
                    <span className="details">{this.props.framework.details}</span>
                </div>
            </button>
            )
        }
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
