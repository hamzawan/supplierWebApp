import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

  class Login extends Component{
    constructor(props){
      super(props);
      this.state={
        years:[]
      };
    }
    render(){
      return(
      <div id="login">
        <Form className="form" method="post">
          <div id="heading">LOGIN</div>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Company Name" />
          </Form.Group>

          <Form.Group controlId="formFinancialYear">
            <Form.Label>Financial Year</Form.Label>
            <Form.Control id="form_input" as="select">
              {this.state.years=Array.from( new Array(15), (v,i) => new Date().getFullYear()-i)}
              {this.state.years.map((y, index) => (
                <option key={index} value={y}>{y}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter User Name:" />
          </Form.Group>

          <Form.Group cont  rolId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group id="formBasicChecbox">
            <Form.Check style={{color:'gray'}} type="checkbox" label="Remember me" />
            <Button id="loginBtn" type="submit">Login</Button>
          </Form.Group>

        </Form>
      </div>
    );
  }
}

export default Login;
