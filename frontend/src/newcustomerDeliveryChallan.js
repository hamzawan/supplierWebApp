import React, { Component } from 'react';
import { Form, Col, Row, InputGroup, Dropdown, Table, Button } from 'react-bootstrap'

  class newcustomerDeliveryChallan extends Component{
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
      <div className="container-fluid">
        <h4>New Delivery Challan</h4>
        <Form method="post">
          <div className="row">
            <div className="col-sm-3">
              <div>Purchase Order No</div>
              <div>
                <select required>
                <option>Choose...</option>
                <option></option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div>Delivery Challan No</div>
              <div><input type="number" required/></div>
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
              <Button id="bttn" type="submit">Submit</Button>
            </div>
          </div>

          <div className='scrollable' style={{height:"280px"}}>
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
                  <td><a href="#" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.delete(i) } }>Delete</a></td>
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

export default newcustomerDeliveryChallan;
