import React from 'react';
import FieldDisplay from '../fields/field-display-no-ed';
import ButtonSubscribe from '../buttons/button-subscribe';
import ButtonUnsubscribe from '../buttons/button-unsubscribe';
import jQuery from 'jquery';


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
		<ButtonUnsubscribe unsubscribeUser={this._unsubscribeUser.bind(this)} courseId={this.props.courseId} />
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

	_unsubscribeUser(courseId){
		let usrId = sessionStorage.getItem('oss-id');
		this.setState({isSubscribed: false});
		jQuery.ajax({
		  method: 'DELETE',
		  url: '/api/users/' + usrId + '/unsubscribe-course/' + courseId,
		  headers: {
                'Authorization': 'bearerU2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA7'+
                '2oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc'
            },
		  success: () => {
		  	
		  }
		});
	}

}