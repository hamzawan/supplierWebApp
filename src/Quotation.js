import React, { Component } from 'react';
import './Quotation.css';
import { Form, Col, Row, InputGroup, Dropdown, Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Quotation extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[],
        item:'', brand:'', desc:'', qty:'', price:'', action:''
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
      else if (this.state.price=='' || this.state.price=="enter price"){
        this.setState({price  : "enter price"});
      }
      else{
        row.push([states.sno++,states.item,states.brand,states.desc,states.qty,states.price,states.action]);
        this.setState({
          rows  : row,
          item  : '',
          brand : '',
          desc  : '',
          qty   : '',
          price : '',
          action: ''
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
      <div id="quote">
      <h2>Supplier Quotation</h2>
      <Dropdown id="dropdown">
        <Dropdown.Toggle id="dropdown-basic">Select Supplier</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item ></Dropdown.Item>
          <Dropdown.Item ></Dropdown.Item>
          <Dropdown.Item ></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form>
        <Row>
          <Col md>
            <InputGroup as={Row} className="inpuxsield">
              <Form.Label id="formLabel" column sm="4">Our Ref</Form.Label>
              <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>

            <InputGroup as={Row} className="inputField">
              <Form.Label id="formLabel" column sm="4">Lead time</Form.Label>
              <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>

          <Col md>
            <InputGroup as={Row} className="inputField">
              <Form.Label id="formLabel" column sm="4">Validity</Form.Label>
              <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>

            <InputGroup as={Row} className="inputField">
              <Form.Label id="formLabel" column sm="4">Payment</Form.Label>
              <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
            <Col md>
            <InputGroup as={Row} className="inputField">
              <Form.Label id="formLabel" column sm="4">PRC Basis</Form.Label>
              <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>

            <InputGroup as={Row} className="inputField">
              <Form.Label id="formLabel" column sm="4">YR Ref</Form.Label>
              <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
          <Col md>
            <InputGroup as={Row} className="inputField">
              <Form.Label id="formLabel" column sm="4">Attn</Form.Label>
              <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>

            <InputGroup as={Row} className="inputField">
              <Form.Label id="formLabel" column sm="4">Remarks</Form.Label>
              <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
        </Row>
        <Button id="quotebutton" type="submit">Submit</Button>

        <div className='scrollable'>
        <Table responsive>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Item</th>
              <th>Brand</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
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
            <td><Form.Control name="price" placeholder="price" className="t_field" type="text" value={this.state.price} onChange={e => this.change(e)} /></td>
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

export default Quotation;
