import React, { Component } from 'react';
import { Form, Col, Row, InputGroup, Dropdown, Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class editcustomerPurchaseOrder extends Component{
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
      <div className="container-fluid">
      <h4>Edit Purchase Order</h4>
      <Form>
        <div className="row">
          <div className="col-sm-3">
            <div>Select supplier</div>
            <div>
              <select>
              <option>Choose...</option>
              <option></option>
              </select>
            </div>
          </div>
          <div className="col-sm-3">
            <div>Our Ref</div>
            <div><input type="number"/></div>
          </div>
          <div className="col-sm-3">
            <div>Lead Time</div>
            <div><input type="text"/></div>
          </div>
          <div className="col-sm-3">
            <div>Validity</div>
            <div><input type="text"/></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div>Payment</div>
            <div><input type="text"/></div>
          </div>
          <div className="col-sm-3">
            <div>PRC Basis</div>
            <div><input type="text"/></div>
          </div>
          <div className="col-sm-3">
            <div>YR Ref</div>
            <div><input type="text"/></div>
          </div>
          <div className="col-sm-3">
            <div>Attn</div>
            <div><input type="text"/></div>
          </div>
        </div>
        <div className="row">
        <div className="col-sm-3">
          <div>Select quotation</div>
          <div>
            <select>
            <option>Choose...</option>
            <option></option>
            </select>
          </div>
        </div>
          <div className="col-sm-3">
            <div>Remarks</div>
            <div><input type="text"/></div>
          </div>
          <div className="col-sm-3">
            <div>Follow up</div>
            <div><input type="date"/></div>
          </div>
          <div className="col-sm-3">
            <Button id="bttn" type="submit">Done</Button>
          </div>
        </div>

        <div className='scrollable' style={{height:"190px"}}>
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

export default editcustomerPurchaseOrder;
