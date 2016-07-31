'user strict';

import React from 'react';

//receives id and text
export default class FieldDisplay extends React.Component{

	//receives id and text
	render(){
		return(
			<p className="displayField">{this.props.text}
			</p>
		);
	}
	
}