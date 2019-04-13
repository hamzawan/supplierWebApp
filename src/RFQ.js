import React, { Component } from 'react';
import './RFQ.css';
import { NavDropdown, Form, Col, Button, FormGroup, Table, Dropdown } from 'react-bootstrap';
import ReactTableContainer from "react-table-container";

class Rfq extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[],
        item:'', brand:'', desc:'', qty:'', remark:''
      };
    }
    add = states => {
      let row = this.state.rows;
      if(this.state.item=='' || this.state.item=="enter item name")
      {
        this.setState({item  : "enter item name"});
      }
      else if (this.state.qty=='' || this.state.qty=="enter quantity"){
        this.setState({qty  : "enter quantity"});
      }
      else{
        row.push([states.sno++,states.item,states.brand, states.desc,states.qty,states.remark]);
        this.setState({
          rows  : row,
          item  : '',
          brand : '',
          desc  : '',
          qty   : '',
          remark: ''
        });
      }
    };

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    delete = index => {
      let row = this.state.rows;
      row.splice(index,1);
      let count=1;
      {row.map((item, i) => (
        row[i][0]=count++
      ))}
      this.setState({
        rows  : row,
        sno : this.state.sno-1
      });
  };
    render(){
      return(
      <div className="container-fluid">
        <h1>RFQ</h1>
        <Form>
          <Form.Row>
            <Form.Group className="form-inline" as={Col} controlId="formRFQno">
              <Form.Label id="form_label">RFQ No: &nbsp; &nbsp; &nbsp; </Form.Label>
              <Form.Control id="form_input" type="text" placeholder="Enter RFQ No" />
            </Form.Group>
            <Form.Group className="form-inline" as={Col} controlId="formFrom">
              <Form.Label id="form_label">From: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </Form.Label>
              <Form.Control id="form_input" type="text" placeholder="from" />
            </Form.Group>
            <Form.Group className="form-inline" as={Col} controlId="formSupplierName">
              <Form.Label id="form_label">Supplier Name: &nbsp; </Form.Label> &nbsp;
              <Form.Control id="form_input" as="select">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="form-inline" as={Col} controlId="formCompanyName">
              <Form.Label id="form_label">Company Name: &nbsp; </Form.Label>
              <Form.Control id="form_input" type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group className="form-inline" as={Col} controlId="formRFQ Expiry Date">
              <Form.Label id="form_label">RFQ Expiry Date: &nbsp;</Form.Label>
              <Form.Control id="form_input" type="date" placeholder="mm/dd/yyyy" />
            </Form.Group>
            <Form.Group className="form-inline" as={Col} controlId="formRFQ Notification Date">
              <Form.Label id="form_label">RFQ Notification Date: &nbsp;</Form.Label>
              <Form.Control id="form_input" type="date" placeholder="mm/dd/yyyy" />
            </Form.Group>
            <Form.Group as={Col} controlId="formAttn">
              <Form.Label id="form_label">Attn: &nbsp; </Form.Label>
              <Form.Control id="form_input" type="text" placeholder="Enter Attn" />
            </Form.Group>
            <Button id="bttn" type="submit">Submit</Button>
          </Form.Row>

          <div className='space'></div>
          <div className='scrollable'>
          <Table responsive>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Item</th>
                <th>Brand</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Remarks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.rows.map((item, i) => (
              <tr key={i}>
                <td>{this.state.rows[i][0]}</td>
                <td>{this.state.rows[i][1]}</td>
                <td>{this.state.rows[i][2]}</td>
                <td>{this.state.rows[i][3]}</td>
                <td>{this.state.rows[i][4]}</td>
                <td>{this.state.rows[i][5]}</td>
                <td><a href="#" onClick={() => this.delete(i)}>Delete</a></td>
              </tr>
            ))
          }
            <tr>
              <td></td>
              <td><Form.Control name="item" placeholder="Item" className="t_field" type="text" value={this.state.item} onChange={e => this.change(e)} /></td>
              <td><Form.Control name="brand" placeholder="Brand" className="t_field" type="text" value={this.state.brand} onChange={e => this.change(e)} /></td>
              <td><Form.Control name="desc" placeholder="description" className="t_field" type="text" value={this.state.desc} onChange={e => this.change(e)} /></td>
              <td><Form.Control name="qty" placeholder="quantity" className="t_field" type="text" value={this.state.qty} onChange={e => this.change(e)} /></td>
              <td><Form.Control name="remark" placeholder="remarks" className="t_field" type="text" value={this.state.remark} onChange={e => this.change(e)} /></td>
              <td><a href="#" onClick={()=> this.add(this.state)}>Add</a></td>
            </tr>
            </tbody>
          </Table>
          </div>
        </Form>
      </div>
      );
    }
}

export default Rfq;
