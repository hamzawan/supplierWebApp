import React, { Component } from 'react';
import './supplierRFQ.css';
import { Button, Table, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  class customererRfq extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[["001","Ahmed","Shoaib","Anas","6/30/2019","5/31/2019"]]
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
        <h4 style={{paddingLeft:"45%"}}>RFQ</h4>
        <Button id="newBtn" type="submit" href="/newcustomerRFQ">Add New</Button>
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
                <td><a href="/editcustomerRFQ"><FontAwesomeIcon icon="pencil-alt" /></a> &nbsp;&nbsp;
                    <a href="#" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.delete(this.state) } }><FontAwesomeIcon style={{color:"#ff5050"}} icon="trash-alt" /></a></td>
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

export default customererRfq;
