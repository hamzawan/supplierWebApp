import React, { Component } from 'react';
import './newRFQ.css';
import { Row, InputGroup, NavDropdown, Form, Col, Button, FormGroup, Table, Dropdown } from 'react-bootstrap';
import ReactTableContainer from "react-table-container";
import axios from 'axios';


class editsupplierRfq extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[],
        item:'', brand:'', desc:'', qty:'', remark:'',
        rfq_no:'', from:'', attn:'', follow_up:'', follow_up_expiry:'',
        rfq_header:[]
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
        console.log(row);
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


  componentDidMount() {
   const detailID = this.props.match.params.rfq_no;
   console.log(detailID);
   axios.get(`http://127.0.0.1:8000/api/rfq_header/${detailID}/`)
      .then(res => {
        this.setState({
            rfq_header : res.data
        })
   })
   .catch(err => console.log(err));

    console.log(this.state.rfq_header);

 }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   let row = this.state.rows;
  //   const rfq_no = event.target.elements.rfq_no.value;
  //   const rfq_from = event.target.elements.rfq_from.value;
  //   const rfq_attn = event.target.elements.rfq_attn.value;
  //   const rfq_expiry_date = event.target.elements.rfq_expiry_date.value;
  //   const rfq_notification_date = event.target.elements.rfq_notification_date.value;
  //
  //   console.log(rfq_no);
  //
  //   axios.post('http://127.0.0.1:8000/api/rfq_header/',{
  //       rfq_no: rfq_no,
  //       _from: rfq_from,
  //       attn: rfq_attn,
  //       follow_up: rfq_expiry_date,
  //       follow_up_expiry: rfq_notification_date,
  //       supplier_id: 193
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
  //
  //   for (var i = 0; i < row.length; i++) {
  //     console.log(row[i][1]);
  //     axios.post('http://127.0.0.1:8000/api/rfq_detail/',{
  //         item_name: row[i][1],
  //         item_description: row[i][3],
  //         quantity: row[i][4],
  //         remarks: row[i][5],
  //         rfq_supplier_id: 1
  //     })
  //   }
  // }



    render(){
      return(
      <div className="container-fluid">
        <h4>Edit RFQ</h4>
        <Form onSubmit={this.handleFormSubmit} method="post">
          <div className="row">
            <div className="col-sm-3">
              <div>RFQ No</div>
              <div><input type="text" name="rfq_no" readonly /></div>
            </div>
            <div className="col-sm-3">
              <div>From</div>
              <div><input type="text" name="rfq_from"  /></div>
            </div>
            <div className="col-sm-3">
              <div>Supplier Name</div>
              <div>
                <select onChange={this.handleChange} required>
                <option>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div>Attn</div>
              <div><input type="text" name="rfq_attn" required/></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div>Expiry Date</div>
              <div><input type="date" name="rfq_expiry_date" /></div>
            </div>
            <div className="col-sm-3">
              <div>Notification Date</div>
              <div><input type="date" name="rfq_notification_date" /></div>
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
              <Button id="bttn" type="submit">Done</Button>
            </div>
          </div>
          <div className='scrollable' style={{height:"250px"}}>
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
                  <td><a href="#" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.delete(i) } }>Delete</a></td>
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

export default editsupplierRfq;
