import React from 'react';
import ButtonSave from '../buttons/button-save';

//receives id and text
export default class FieldEdit extends React.Component{
	
	//receives id and text
	render(){
		let text = this.props.text;
		return(
			<p className="editField">
			<input type="text" onChange={this._handleChange.bind(this)}
			onBlur={this._handleBlur.bind(this)}
			 value={text} ref={(input) => this._text = input}/>
			 
			<ButtonSave />
			</p>
		);
	}

	//receives id and text
	_handleChange(){
		let text = this._text.value;
		this.props.onChange(this.props.id, text);
	}


	//receives id and text
	_handleBlur(){
		let text = this._text.value;
		this.props.onSave(text);
	}
}