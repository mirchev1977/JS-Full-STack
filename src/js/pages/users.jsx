'user strict';

import React from 'react';
import PageUsers from '../components/pages/page-users.jsx';

export default class Courses extends React.Component{
	render(){
		return(
			<div className="page-courses">
			<PageUsers apiUrl="/api/users" /></div>
		);
	}
}