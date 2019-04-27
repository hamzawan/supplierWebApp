import React, { Component } from 'react';
import { Form, Col, Row, InputGroup, Dropdown, Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

class supplierQuotation extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[],
        item:'', brand:'', desc:'', qty:'', price:'', action:'', rfq_no : [], row_item : [], quotation_header: [], supplier_our_ref:'',input:'',id : ''
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

    change = (e,i) => {
      console.log(this.state.rows);
      console.log(i);
      console.log(typeof e.target.name);
        // console.log(this.state.rows[i]['item_name']);
        this.state.rows[i][e.target.name] = e.target.value;
        this.setState({
        });


    };

    delete = index => {
      let row = this.state.rows;
      row.splice(index,1);
      let count=1;
      {row.map((item, i) => (
        row[i][0]=count++
      ))}
      console.log(this.state.rows);
      this.setState({
        rows  : row,
        sno : this.state.sno-1
      });
    };

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/quotation_header_supplier/')
            .then(res => {
              this.setState({
                  quotation_header : res.data
              });
              console.log(this.state.quotation_header);
              const last = [];
              const last_id = [];
              const len = (this.state.quotation_header.length - 1 );
              this.state.quotation_header.map((no,i) => {
                last[i] = no.our_ref
                last_id[i] = no.id
              })
              var our_ref = last[len];
              var id_quotation = last_id[len];
              this.setState({
                id : id_quotation
              })
              if (our_ref) {
                our_ref = our_ref.split('QU/SP/')
                our_ref = parseInt(our_ref[1]) + 1;
                our_ref = 'QU/SP/'+our_ref+'';
                this.setState({
                    supplier_our_ref: our_ref
                })
              }
              else {
                this.setState({
                  supplier_our_ref: 'QU/SP/101'
                })
                console.log(this.state.supplier_our_ref);
              }
            })

        axios.get('http://127.0.0.1:8000/api/rfq_header/')
              .then(res => {
                this.setState({
                  rfq_no : res.data
                })
                console.log(this.state.rfq_no);
              })
              .catch(err => console.log(err))
          }

          handleClick = (event) => {
            event.preventDefault();
            const value = this.state.input;
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
                                fk["unit"] = ""
                                fk["price"] = 0.00
                                console.log(row);
                            }
                          })
                          this.setState({
                            rows : row
                          });
                          // console.log(this.state.rows);
                      })
                    }
                  })
                })
          }

          quotationSubmit = (e) => {
            e.preventDefault();
            const supplier_name = e.target.elements.select_supplier.value;
            const our_ref = e.target.elements.ourref.value;
            const leadtime = e.target.elements.leadtime.value;
            const validity = e.target.elements.validity.value;
            const payment = e.target.elements.payment.value;
            const prcbasis = e.target.elements.prcbasis.value;
            const yrref = e.target.elements.yrref.value;
            const attn = e.target.elements.attn.value;
            const remarks = e.target.elements.remarks.value;
            const follow_up = e.target.elements.follow_up.value;

            // axios.post('http://127.0.0.1:8000/api/quotation_header_supplier/',{
            //     our_ref : our_ref,
            //     supplier_name : "Hassam",
            //     attn : attn,
            //     _from : "jacky",
            //     email : "jacky@chain.com",
            //     prc_basis : prcbasis,
            //     yrref : yrref,
            //     leadtime : leadtime,
            //     validity : validity,
            //     payment : payment,
            //     remarks : remarks,
            //     follow_up : follow_up,
            //     supplier_id : supplier_name,
            //     show_notification : "yes",
            //     company_id : 1
            // })
            // .then(res => console.log(res))
            // .catch(err => console.log(err));




            this.state.rows.map(value => {
              console.log(value);
              axios.post('http://127.0.0.1:8000/api/quotation_detail_supplier/',{
                item_name : value.item_name,
                item_description : value.item_description,
                quantity : value.quantity,
                unit : 'value.unit',
                price : value.price,
                // quotation_header_id : this.state.id
              } )
              console.log(typeof value.unit);
            })

          }


      handleChange = (e) => {
        this.setState({input: e.target.value });
      }

      // handleClick = () => {
      //     console.log(this.state.input);
      // }

    render(){
      return(
      <div className="container-fluid">
        <h4>New Quotation</h4>
          <Form method="post" onSubmit={this.quotationSubmit} autocomplete="off">
            <div className="row">
              <div className="col-sm-3">
                <div>Select supplier</div>
                <div>
                  <input list="ss" type="text" name="select_supplier"/>
                    <datalist id="ss">
                    {this.state.rfq_no.map(no => {
                      return  <option value={no.supplier_id}>{no.supplier_id}</option>})
                    }
                    </datalist>
                </div>
              </div>
              <div className="col-sm-3">
                <div>Our Ref</div>
                <div><input type="text" name="ourref" readOnly value={this.state.supplier_our_ref}/></div>
              </div>
              <div className="col-sm-3">
                <div>Lead Time</div>
                <div><input type="text" name="leadtime"/></div>
              </div>
              <div className="col-sm-3">
                <div>Validity</div>
                <div><input type="text" name="validity"/></div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div>Payment</div>
                <div><input type="text" name="payment"/></div>
              </div>
              <div className="col-sm-3">
                <div>PRC Basis</div>
                <div><input type="text" name="prcbasis" /></div>
              </div>
              <div className="col-sm-3">
                <div>YR Ref</div>
                <div><input type="text" name="yrref"/></div>
              </div>
              <div className="col-sm-3">
                <div>Attn</div>
                <div><input type="text" name="attn"/></div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div>Remarks</div>
                <div><input type="text" name="remarks"/></div>
              </div>
              <div className="col-sm-3">
                <div>Follow Up</div>
                <div><input type="date" name="follow_up"/></div>
              </div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
                <Button id="bttn" type="submit">Submit</Button>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <div>Select RFQ</div>
                <input list="rfq" type="text" name="rfq" onChange={this.handleChange}/>
                  <datalist id="rfq">
                  {this.state.rfq_no.map(no => {
                    return  <option value={no.rfq_no}/>})
                  }
                  </datalist>
                </div>
              <div className="col-sm-3">
                  <Button id="bttn" onClick={this.handleClick} type="button">Insert</Button>
              </div>
            </div>

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
                <td><Form.Control name="item_name" placeholder="Item name" className="t_field" type="text" value={item.item_name} onChange={e => this.change(e,i)} /></td>
                <td><Form.Control name="item_description" placeholder="unit" className="t_field" type="text" value={item.item_description} onChange={e => this.change(e,i)} /></td>
                <td><Form.Control name="quantity" placeholder="unit" className="t_field" type="text" value={item.quantity} onChange={e => this.change(e,i)} /></td>
                <td><Form.Control name="unit" placeholder="unit" className="t_field" type="text" value={item.unit} onChange={e => this.change(e,i)} /></td>
                <td><Form.Control name="price" placeholder="unit price" className="t_field" type="text" value={item.price} onChange={e => this.change(e,i)} /></td>
                <td><a href="#" onClick={() => this.delete(i)}>Delete</a></td>
              </tr>
            ))
          }
          {
            this.state.row_item.map((item,i) => {
      return( <tr>
                <td>{i}</td>
                <td><Form.Control name="item" placeholder="Item" className="t_field" type="text" value={item.item_name} onChange={e => this.change(e,i)} /></td>
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
