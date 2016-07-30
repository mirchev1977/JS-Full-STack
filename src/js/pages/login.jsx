import React from 'react';
import PageLogin from '../components/pages/page-login';



export default class Login extends React.Component {
  render() {
    return (
      <div className="page-login">
      <PageLogin apiUrl="/api/login" /></div>
    );
  }
}
