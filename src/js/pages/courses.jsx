import React from 'react';
import PageCourses from '../components/page-courses';

export default class Courses extends React.Component{
	render(){
		return(
			<div><PageCourses apiUrl="/api/courses" /></div>
		);
	}
}