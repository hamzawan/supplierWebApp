import React, { Component } from 'react';
import './supplierRFQ.css';
import { Button, Table, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  class customerQuotation extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[["Ahmed","1","2-3 weeks","10 days","advance","Ex Works Karachi","aws11","Anas","free delivery","5/31/2019"]]
      };
    }

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
      <div className="contain">
        <h4 style={{paddingLeft:"40%"}}>Purchase Order</h4>
        <Button id="newBtn" type="submit" href="/newcustomerPurchaseOrder">Add New</Button>
        <div className='scrollable' style={{height:"300px"}}>
          <Table responsive>
            <thead>
              <tr>
                <th>SNo</th>
                <th>Supplier Name</th>
                <th>Our RFQ</th>
                <th>Lead Time</th>
                <th>Validity</th>
                <th>Payment</th>
                <th>PRC Basis</th>
                <th>YR Ref</th>
                <th>Attn</th>
                <th>Remarks</th>
                <th>Follow Up</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
              // display table content
            }
            {
              this.state.rows.map((item, i) => (
              <tr key={i}>
                <td>{this.state.sno++}</td>
                <td>{this.state.rows[i][0]}</td>
                <td>{this.state.rows[i][1]}</td>
                <td>{this.state.rows[i][2]}</td>
                <td>{this.state.rows[i][3]}</td>
                <td>{this.state.rows[i][4]}</td>
                <td>{this.state.rows[i][5]}</td>
                <td>{this.state.rows[i][6]}</td>
                <td>{this.state.rows[i][7]}</td>
                <td>{this.state.rows[i][8]}</td>
                <td>{this.state.rows[i][9]}</td>
                <td><a href="/editcustomerPurchaseOrder"><FontAwesomeIcon icon="pencil-alt" /></a> &nbsp;&nbsp;
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

export default customerQuotation;
