import React, {Component} from "react";
class Box extends Component{
	render() {
		return(
				<div className="box">
<center>
	<img src={this.props.pic} className="img" />
	<p>{this.props.name}</p>
	<p>{this.props.job}</p>
</center>
			</div>);
	}
}

export default Box;