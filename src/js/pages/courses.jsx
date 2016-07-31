'user strict';

import React from 'react';
import PageCourses from '../components/pages/page-courses';

export default class Courses extends React.Component{
	render(){
		return(
			<div className="page-courses">
			<PageCourses apiUrl="/api/courses" /></div>
		);
	}
}