import React, { Component } from 'react';
import './supplierDeliveryChallan.css'
import { Form, Col, Row, InputGroup, Dropdown, Table, Button } from 'react-bootstrap'

  class supplierDeliveryChallan extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[],
        item:'', desc:'', qty:''
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
        row.push([states.sno++,states.item,states.desc,states.qty]);
        this.setState({
          rows  : row,
          item  : '',
          desc  : '',
          qty   : '',
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
      <div id="DC">
        <h2>Delivery Challan</h2>
        <Form>
        <Row>
          <Col sm="4">
            <InputGroup as={Row} className="inputfield">
              <span id="formLabel">PO no &nbsp; </span>
              <span><Dropdown id="dropdown">
                <Dropdown.Toggle id="supplierdropdown-basic">Select Supplier</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item ></Dropdown.Item>
                  <Dropdown.Item ></Dropdown.Item>
                  <Dropdown.Item ></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </span>
            </InputGroup>
          </Col>
          <Col sm="4">
            <InputGroup style={{marginBottom:"10px"}} as={Row} className="inputfield">
              <span id="formLabel" column>DC no &nbsp;</span>
              <span><input type="text" id="textfield" defaultValue=""/></span>
            </InputGroup>
          </Col>
          <Col sm="4">
            <Button id="DCButton" type="submit">Submit</Button>
          </Col>
          </Row>
          <div className='scrollable'>
            <Table responsive>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Quantity</th>
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
                <td><Form.Control name="desc" placeholder="description" className="t_field" type="text" value={this.state.desc} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="qty" placeholder="quantity" className="t_field" type="text" value={this.state.qty} onChange={e => this.change(e)} /></td>
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

export default supplierDeliveryChallan;
