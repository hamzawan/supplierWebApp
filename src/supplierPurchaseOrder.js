import React, { Component } from 'react';
import './supplierPurchaseOrder.css';
import { Form, Col, Row, InputGroup, Dropdown, Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class supplierPurchaseOrder extends Component{
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
      <div id="purchase">
      <h2>Purchase Order</h2>
      <Form>
        <Row>
          <Col sm>
            <InputGroup as={Row} className="inputfield">
              <Col id="formLabel">Supplier Name: &nbsp; </Col>
              <Col><Dropdown id="dropdown">
                <Dropdown.Toggle id="purchasedropdown-basic">Select Supplier</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item ></Dropdown.Item>
                  <Dropdown.Item ></Dropdown.Item>
                  <Dropdown.Item ></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>
            </InputGroup>
          </Col>
          <Col sm>
            <InputGroup as={Row} className="inputfield">
              <Col id="formLabel" column>Our Ref</Col>
              <Col><Form.Control type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
          <Col sm>
            <InputGroup as={Row} className="inputfield">
              <Col id="formLabel" column>Attn</Col>
              <Col><Form.Control type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
          <Col sm>
            <InputGroup as={Row} className="inputfield">
              <Col id="formLabel" column>PRC Basis</Col>
              <Col><Form.Control type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <InputGroup as={Row} className="inputfield">
              <Col id="formLabel" column>YR Ref</Col>
              <Col><Form.Control type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
          <Col sm>
            <InputGroup as={Row} className="inputfield">
              <Col id="formLabel" column>Lead time</Col>
              <Col><Form.Control type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
          <Col sm>
            <InputGroup as={Row} className="inputField">
              <Col id="formLabel" column>Validity</Col>
              <Col><Form.Control type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
          <Col sm>
            <InputGroup as={Row} className="inputfield">
              <Col id="formLabel" column>Payment</Col>
              <Col><Form.Control type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <InputGroup as={Row} className="inputfield">
              <Col id="formLabel" column>Remarks</Col>
              <Col><Form.Control type="text" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
          <Col sm>
            <InputGroup as={Row} className="inputfield">
              <Col id="formLabel" column>Follow up</Col>
              <Col><Form.Control type="date" id="textfield" defaultValue=""/></Col>
            </InputGroup>
          </Col>
          <Col sm></Col>
          <Col sm><Button id="purchasebutton" type="submit">Submit</Button></Col>
        </Row>
        <Dropdown id="selectQuotedropdown">
          <Dropdown.Toggle id="selectQuotedropdown-basic">Select Quotation</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item ></Dropdown.Item>
            <Dropdown.Item ></Dropdown.Item>
            <Dropdown.Item ></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

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
              <th></th>
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
              <td><input type="checkbox"/></td>
            </tr>
          ))
        }
        {
          // <tr>
          //   <td></td>
          //   <td><Form.Control name="item" placeholder="Item" className="t_field" type="text" value={this.state.item} onChange={e => this.change(e)} /></td>
          //   <td><Form.Control name="brand" placeholder="Brand" className="t_field" type="text" value={this.state.brand} onChange={e => this.change(e)} /></td>
          //   <td><Form.Control name="desc" placeholder="description" className="t_field" type="text" value={this.state.desc} onChange={e => this.change(e)} /></td>
          //   <td><Form.Control name="qty" placeholder="quantity" className="t_field" type="text" value={this.state.qty} onChange={e => this.change(e)} /></td>
          //   <td><Form.Control name="price" placeholder="price" className="t_field" type="text" value={this.state.price} onChange={e => this.change(e)} /></td>
          //   <td><input type="checkbox"/></td>
          // </tr>
        }
          </tbody>
        </Table>
        </div>
      </Form>
      </div>
    );
  }
}

export default supplierPurchaseOrder;
