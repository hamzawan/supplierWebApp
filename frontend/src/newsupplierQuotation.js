import React, { Component } from 'react';
import { Form, Col, Row, InputGroup, Dropdown, Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

class supplierQuotation extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[],
        item:'', brand:'', desc:'', qty:'', price:'', action:'', rfq_no : [], row_item : []
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

    componentDidMount(){
      // axios.get('http://127.0.0.1:8000/api/rfq_header/')
      //       .then(res => {
      //         this.setState({
      //             rfq_header : res.data
      //         });
      //         const last = [];
      //         const len = (this.state.rfq_header.length - 1 );
      //         this.state.rfq_header.map((no,i) => {
      //           last[i] = no.rfq_no
      //         })
      //         var rfq_no = last[len];
      //         if (rfq_no) {
      //           rfq_no = rfq_no.split('RFQ/SP/')
      //           rfq_no = parseInt(rfq_no[1]) + 1;
      //           rfq_no = 'RFQ/SP/'+rfq_no+'';
      //           this.setState({
      //               supplier_rfq_no: rfq_no
      //           })
      //         }
      //         else {
      //           this.setState({
      //             supplier_rfq_no: 'RFQ/SP/101'
      //           })
      //           console.log(this.state.supplier_rfq_no);
      //         }
      //       })

        axios.get('http://127.0.0.1:8000/api/rfq_header/')
              .then(res => {
                this.setState({
                  rfq_no : res.data
                })
                console.log(this.state.rfq_no);
              })
              .catch(err => console.log(err))
          }

          onInserted = (event) => {
            event.preventDefault();
            const value = event.target.elements.rfq.value;
            axios.get('http://127.0.0.1:8000/api/rfq_header/')
                .then(res => {
                  const data = res.data
                  data.map(no => {
                    if (value == no.rfq_no) {
                      console.log(no.id);
                      let row = this.state.rows;
                      axios.get('http://127.0.0.1:8000/api/rfq_detail/')
                      .then(result => {
                          const item = result.data
                          item.map(fk => {
                            if (no.id == fk.rfq_supplier_id) {
                                row.push(fk)
                            }
                          })
                          this.setState({
                            rows : row
                          });
                          console.log(this.state.rows);
                      })
                    }
                  })
                })
          }

    render(){
      return(
      <div className="container-fluid">
        <h4>New Quotation</h4>
          <Form method="post">
            <div className="row">
              <div className="col-sm-3">
                <div>Select supplier</div>
                <div>
                  <select required>
                  <option>Choose...</option>
                  <option></option>
                  </select>
                </div>
              </div>
              <div className="col-sm-3">
                <div>Our Ref</div>
                <div><input type="text"/></div>
              </div>
              <div className="col-sm-3">
                <div>Lead Time</div>
                <div><input type="text" required/></div>
              </div>
              <div className="col-sm-3">
                <div>Validity</div>
                <div><input type="text" required/></div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div>Payment</div>
                <div><input type="text" required/></div>
              </div>
              <div className="col-sm-3">
                <div>PRC Basis</div>
                <div><input type="text" required/></div>
              </div>
              <div className="col-sm-3">
                <div>YR Ref</div>
                <div><input type="text" required/></div>
              </div>
              <div className="col-sm-3">
                <div>Attn</div>
                <div><input type="text" required/></div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div>Remarks</div>
                <div><input type="text" required/></div>
              </div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
                <Button id="bttn" type="submit">Submit</Button>
              </div>
            </div>

          <Form onSubmit={this.onInserted} autocomplete="off" >
            <div className="row">
              <div className="col-sm-3">
                <div>Select RFQ</div>
                <input list="rfq" type="text" name="rfq"/>
                  <datalist id="rfq">
                  {this.state.rfq_no.map(no => {
                    return  <option value={no.rfq_no}/>})
                  }
                  </datalist>
                </div>
              <div className="col-sm-3">
                  <Button id="bttn" type="submit">Insert</Button>
              </div>
            </div>
              </Form>
        {
          // <Row>
          //   <Col md>
          //     <InputGroup as={Row} className="inpuxsield">
          //       <Form.Label id="formLabel" column sm="4">Our Ref</Form.Label>
          //       <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
          //     </InputGroup>
          //
          //     <InputGroup as={Row} className="inputField">
          //       <Form.Label id="formLabel" column sm="4">Lead time</Form.Label>
          //       <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
          //     </InputGroup>
          //   </Col>
          //
          //   <Col md>
          //     <InputGroup as={Row} className="inputField">
          //       <Form.Label id="formLabel" column sm="4">Validity</Form.Label>
          //       <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
          //     </InputGroup>
          //
          //     <InputGroup as={Row} className="inputField">
          //       <Form.Label id="formLabel" column sm="4">Payment</Form.Label>
          //       <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
          //     </InputGroup>
          //   </Col>
          //     <Col md>
          //     <InputGroup as={Row} className="inputField">
          //       <Form.Label id="formLabel" column sm="4">PRC Basis</Form.Label>
          //       <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
          //     </InputGroup>
          //
          //     <InputGroup as={Row} className="inputField">
          //       <Form.Label id="formLabel" column sm="4">YR Ref</Form.Label>
          //       <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
          //     </InputGroup>
          //   </Col>
          //   <Col md>
          //     <InputGroup as={Row} className="inputField">
          //       <Form.Label id="formLabel" column sm="4">Attn</Form.Label>
          //       <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
          //     </InputGroup>
          //
          //     <InputGroup as={Row} className="inputField">
          //       <Form.Label id="formLabel" column sm="4">Remarks</Form.Label>
          //       <Col sm="8"><Form.Control size="sm" type="text" id="textfield" defaultValue=""/></Col>
          //     </InputGroup>
          //   </Col>
          // </Row>
          // <Button id="quotebutton" type="submit">Submit</Button>
        }

          <div className='scrollable' style={{height:"190px"}}>
          <Table responsive>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Item</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>U/Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.rows.map((item, i) => (
              <tr key={i}>
                <td>{i+1}</td>
                <td><Form.Control name="item" placeholder="unit" className="t_field" type="text" value={item.item_name} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="item" placeholder="unit" className="t_field" type="text" value={item.item_description} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="item" placeholder="unit" className="t_field" type="text" value={item.quantity} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="item" placeholder="unit" className="t_field" type="text" value="" onChange={e => this.change(e)} /></td>
                <td><Form.Control name="item" placeholder="unit price" className="t_field" type="text" value="" onChange={e => this.change(e)} /></td>
                <td><a href="#" onClick={() => this.delete(i)}>Delete</a></td>
              </tr>
            ))
          }
          {
            this.state.row_item.map((item,i) => {
      return( <tr>
                <td>{i}</td>
                <td><Form.Control name="item" placeholder="Item" className="t_field" type="text" value={item.item_name} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="brand" placeholder="Brand" className="t_field" type="text" value={this.state.brand} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="desc" placeholder="description" className="t_field" type="text" value={this.state.desc} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="qty" placeholder="quantity" className="t_field" type="text" value={this.state.qty} onChange={e => this.change(e)} /></td>
                <td><Form.Control name="price" placeholder="price" className="t_field" type="text" value={this.state.price} onChange={e => this.change(e)} /></td>
                <td><a href="#" onClick={()=> this.add(this.state)}>Add</a></td>
              </tr>
            )
            })
          }
            </tbody>
          </Table>
          </div>
        </Form>
      </div>
    );
  }
}

export default supplierQuotation;
