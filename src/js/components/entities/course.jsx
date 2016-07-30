import React from 'react';
import FieldDisplay from '../fields/field-display-no-ed';
import ButtonSubscribe from '../buttons/button-subscribe';

//receives courseId and courseName
export default class Course extends React.Component{

	constructor(){
		super();
		this.state = {
			isSubscribed: false
		}

	}

	//receives courseId and courseName
	render(){
		let displaySubscr = this._displaySubscrButton();
		return (<div className="courseContainer">
		<FieldDisplay id={this.props.courseId} text={this.props.courseName} />
		{displaySubscr}
		</div>);
	}

	_displaySubscrButton(){
		let cookie = document.cookie;
		if (cookie !== "" && this.state.isSubscribed === false) {
			return (<ButtonSubscribe subscribeUser = {this.props.subscribeUser} courseId = {this.props.courseId}
						handleSubscribe = {this._handleSubscribe.bind(this)} />);
		}
	}

	_handleSubscribe(){
		this.setState({isSubscribed: true});
	}

}