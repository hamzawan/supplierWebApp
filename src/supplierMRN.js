import React, { Component } from 'react';
import './supplierMRN.css';
import { Form, Row, Col, Button, Table, InputGroup, Dropdown } from 'react-bootstrap';

  class supplierMRN extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[],
        item:'', orderqty:'', acceptedqty:''
      };
    }
    add = states => {
      let row = this.state.rows;
      if(this.state.item=='' || this.state.item=="enter item name")
      {
        this.setState({item  : "enter item name"});
      }
      else if (this.state.orderqty=='' || this.state.orderqty=="enter quantity"){
        this.setState({orderqty  : "enter quantity"});
      }
      else if (this.state.acceptedqty=='' || this.state.acceptedqty=="enter quantity"){
        this.setState({acceptedqty  : "enter quantity"});
      }
      else{
        row.push([states.sno++,states.item,states.orderqty,states.acceptedqty]);
        this.setState({
          rows  : row,
          item  : '',
          orderqty   : '',
          acceptedqty   : ''
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
      <div id="supplierMRN">
        <h1>MRN</h1>
        <Form>
        <Row>
            <Col sm="3">
              <Dropdown style={{margin: "0 0 10px 0"}} id="dropdown">
                <Dropdown.Toggle id="dropdown-basic">Select DC no</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item ></Dropdown.Item>
                  <Dropdown.Item ></Dropdown.Item>
                  <Dropdown.Item ></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm="6"></Col>
            <Col sm="3"><Button id="MRNButton" type="submit">Submit</Button></Col>
          </Row>
          <div className='scrollable'>
            <Table responsive>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Item</th>
                  <th>Order Quantity</th>
                  <th>Acceped Quantity</th>
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
                  <td><a href="#" onClick={() => this.delete(i)}>Delete</a></td>
                </tr>
              ))
            }
              <tr>
                <td></td>
                <td><Form.Control name="item" placeholder="Item" className="t_field" type="text" value={this.state.item} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="orderqty" placeholder="order quantity" className="t_field" type="text" value={this.state.orderqty} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="acceptedqty" placeholder="accepted quantity" className="t_field" type="text" value={this.state.acceptedqty} onChange={e => this.change(e)} /></td>
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

export default supplierMRN;
