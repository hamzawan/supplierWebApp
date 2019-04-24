import React, { Component } from 'react';
import './supplierRFQ.css';
import { Button, Table, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Router, Route, Link } from 'react-router-dom';
import axios from 'axios';


  class supplierRfq extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rfq_header:[]
      };
    }

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    edit = args => {
      console.log(args);
      // axios.get(`/editsupplierRFQ/${args}`)
    }


    delete = index => {
      let row = this.state.rfq_header;
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


    componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/rfq_header/')
            .then(res => {
              this.setState({
                rfq_header : res.data
              });
              console.log(this.state.rfq_header);
            })

    }

    render(){
      return(
      <div className="contain">
        <h4 style={{paddingLeft:"45%"}}>RFQ</h4>
        <Button id="newBtn" type="submit" href="/newsupplierRFQ">Add New</Button>
        <div className='scrollable' style={{height:"300px"}}>
          <Table responsive>
            <thead>
              <tr>
                <th>SNo</th>
                <th>RFQ No</th>
                <th>From</th>
                <th>Supplier Name</th>
                <th>Attn</th>
                <th>Expiry Date</th>
                <th>Notification</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.rfq_header.map((item,i)=> (
                <tr key={i}>
                <td>{this.state.sno++}</td>
                <td>{item.rfq_no}</td>
                <td>{item._from}</td>
                <td>{item.supplier_id}</td>
                <td>{item.attn}</td>
                <td>{item.follow_up}</td>
                <td>{item.follow_up_expiry}</td>
                <td><a href={`/editsupplierRFQ/${item.id}`}><FontAwesomeIcon icon="pencil-alt" /></a> &nbsp;&nbsp;
                    <a href="#" onClick={()=> this.delete(this.state)}><FontAwesomeIcon style={{color:"#ff5050"}} icon="trash-alt" /></a></td>
                </tr>
              ))
            }
          {
            //end display
          }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default supplierRfq;
