import React,  { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import './Header.css';
import img from './adminImg.jpg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component{
    constructor(props){
      super(props);
      this.state={
        customerDropdown:false,
        supplierDropdown:false,
        accountsDropdown:false
      };
      this.toggleSupplierDropdown=this.toggleSupplierDropdown.bind(this);
      this.toggleCustomerDropdown=this.toggleCustomerDropdown.bind(this);
      this.toggleAccountsDropdown=this.toggleAccountsDropdown.bind(this);
      this.noDropdown=this.noDropdown.bind(this);
    }
    toggleCustomerDropdown () {
      this.setState({
        customerDropdown: !this.state.customerDropdown,
        supplierDropdown: false,
        accountsDropdown: false
      });
    }
    toggleSupplierDropdown () {
      this.setState({
        supplierDropdown: !this.state.supplierDropdown,
        customerDropdown: false,
        accountsDropdown: false
      });
    }
    toggleAccountsDropdown () {
      this.setState({
        accountsDropdown: !this.state.accountsDropdown,
        supplierDropdown: false,
        customerDropdown: false
      });
    }
    noDropdown(){
      this.setState({
        accountsDropdown: false,
        supplierDropdown: false,
        customerDropdown: false
      });
    }
    render(){
      return(
      <div>
        <Navbar id="navbar" expand="lg" variant="dark">
          <Link to="/Home"><h4>CompanyName</h4></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="centralNavMenu">
              <span><Link onClick={this.noDropdown} to="/Home">Home</Link></span>
              <span><Link onClick={this.toggleSupplierDropdown}>Suppliers</Link></span>
              <span><Link onClick={this.toggleCustomerDropdown}>Customers</Link></span>
              <span><Link onClick={this.toggleAccountsDropdown}>Accounts</Link></span>
              <span><Link onClick={this.noDropdown} to="/companyInfo">Company Info</Link></span>
            </Nav>
            <Nav className="notification-icons">
              <span>
                <NavDropdown title=<FontAwesomeIcon style={{color:"whitesmoke"}} icon="box-open" />>
                  <NavDropdown.Item style={{color:'black'}} href="#">msg1</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'black'}} href="#">msg2</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'black'}} href="#">msg3</NavDropdown.Item>
                </NavDropdown>
              </span>
              <span>
                <NavDropdown title=<FontAwesomeIcon style={{color:"whitesmoke"}} icon="user-friends" />>
                  <NavDropdown.Item style={{color:'black'}} href="#">msg1</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'black'}} href="#">msg2</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'black'}} href="#">msg3</NavDropdown.Item>
                </NavDropdown>
              </span>
              <span>
                <NavDropdown title=<FontAwesomeIcon style={{color:"whitesmoke"}} icon="user-circle" />>
                  <NavDropdown.Item style={{color:'black'}} href="#">msg1</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'black'}} href="#">msg2</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'black'}} href="#">msg3</NavDropdown.Item>
                </NavDropdown>
              </span>
            </Nav>
            <Nav className="ml-auto">
              <span><img src={img}/></span>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item style={{color:'black'}} href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item style={{color:'black'}} href="#">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={{color:'black'}} href="#">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.state.customerDropdown && <CustomerDropdown />}
        {this.state.supplierDropdown && <SupplierDropdown />}
        {this.state.accountsDropdown && <AccountsDropdown />}

      </div>
      );
    }
}

class CustomerDropdown extends Component{
  noDropdown(){
    this.setState({
      accountsDropdown: false,
      supplierDropdown: false,
      customerDropdown: false
    });
  }
  render(){
    return(
      <div className="drop_down" id="customerDropdown">
        <Link onClick={this.noDropdown} to="/customerRFQ">RFQ</Link>
        <Link onClick={this.noDropdown} to="/customerQuotation">Quotation</Link>
        <Link onClick={this.noDropdown} to="/customerPurchaseOrder">Purchase Order</Link>
        <Link onClick={this.noDropdown} to="/customerDeliveryChallan">Delivery Challan</Link>
        <Link onClick={this.noDropdown} to="/customerMRN">MRN status</Link>
      </div>
    );
  }
}

class SupplierDropdown extends Component{
  noDropdown(){
    this.setState({
      accountsDropdown: false,
      supplierDropdown: false,
      customerDropdown: false
    });
  }
  render(){
    return(
      <div className="drop_down" id="SupplierDropdown">
        <Link onClick={this.noDropdown} to="/supplierRFQ">RFQ</Link>
        <Link onClick={this.noDropdown} to="/supplierQuotation">Quotation</Link>
        <Link onClick={this.noDropdown} to="/supplierPurchaseOrder">Purchase Order</Link>
        <Link onClick={this.noDropdown} to="/supplierDeliveryChallan">Delivery Challan</Link>
        <Link onClick={this.noDropdown} to="/supplierMRN">MRN status</Link>
      </div>
    );
  }
}

class AccountsDropdown extends Component{
  noDropdown(){
    this.setState({
      accountsDropdown: false,
      supplierDropdown: false,
      customerDropdown: false
    });
  }
  render(){
    return(
      <div className="drop_down" id="customerDropdown">
        <Link onClick={this.noDropdown} to="/profitandLoss">Profit & Loss</Link>
        <Link onClick={this.noDropdown} to="/bankAccount">Bank Accounts</Link>
        <Link onClick={this.noDropdown} to="/transactions">Transactions</Link>
      </div>
    );
  }
}

export default Header;
