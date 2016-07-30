import React from 'react';
import PageRegister from '../components/pages/page-register';

export default class Register extends React.Component{
	render(){
		return(
			<div className="page-courses">
			<PageRegister apiUrl="/api/register" /></div>
		);
	}
}