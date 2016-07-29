import React from 'react';
import ButtonSave from './button-save';

//receives id and text
export default class FieldEdit extends React.Component{
	
	//receives id and text
	render(){
		let text = this.props.text;
		return(
			<p className="editField">
			<input type="text" onChange={this._handleChange.bind(this)} value={text} ref={(input) => this._text = input}/>
			<ButtonSave onSave={this.props.onSave} />
			</p>
		);
	}

	//receives id and text
	_handleChange(){
		let text = this._text.value;
		this.props.onChange(this.props.id, text);
	}
}