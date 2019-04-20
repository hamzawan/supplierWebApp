import React, { Component } from 'react';
import './supplierRFQ.css';
import { Button, Table, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  class supplierMRN extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[["019"]]
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
        <h4 style={{paddingLeft:"45%"}}>MRN</h4>
        <Button id="newBtn" type="submit" href="/newsupplierMRN">Add New</Button>
        <div className='scrollable' style={{height:"300px"}}>
          <Table responsive>
            <thead>
              <tr>
                <th>SNo</th>
                <th>Delivery Challan No</th>
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
                <td><a href="/editsupplierMRN"><FontAwesomeIcon icon="pencil-alt" /></a> &nbsp;&nbsp;
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

export default supplierMRN;
