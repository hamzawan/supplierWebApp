import React, { Component } from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from './Header';
import Login from './Login';

import supplierRFQ from './supplierRFQ';
import newsupplierRFQ from './newsupplierRFQ';
import editsupplierRfq from './editsupplierRFQ';
import supplierQuotation from './supplierQuotation';
import newsupplierQuotation from './newsupplierQuotation';
import editsupplierQuotation from './editsupplierQuotation';
import supplierPurchaseOrder from './supplierPurchaseOrder';
import newsupplierPurchaseOrder from './newsupplierPurchaseOrder';
import editsupplierPurchaseOrder from './editsupplierPurchaseOrder';
import supplierDeliveryChallan from './supplierDeliveryChallan';
import newsupplierDeliveryChallan from './newsupplierDeliveryChallan';
import editsupplierDeliveryChallan from './editsupplierDeliveryChallan';
import supplierMRN from './supplierMRN';
import newsupplierMRN from './newsupplierMRN';
import editsupplierMRN from './editsupplierMRN';

import newcustomerRfq from './newcustomerRFQ.js';
import customerQuotation from './customerQuotation';
library.add(faTrashAlt, faEdit, faPencilAlt);

class App extends Component {
  render() {
      return (
        <Router>
          <div>
          {
            // {!this.state.login && <Route path="/" exact strict render={()=>{return <Login islogin={this.toggleLogin.bind(this)} />;}} />}
            // {!this.state.login && <Route path="/" exact strict component={Login} />}
            // {this.state.login && <Header />}
            // {this.state.login && <Route path="/Home" exact strict render={()=>{return(<h1>Home</h1>)}} />}
            // {this.state.login && <Route path="/RFQ" exact strict component={Rfq} />}

              // <Route path="/" exact strict component={Login} />

          }
            <Header />
            <Route path="/Home" exact strict render={()=>{return(<h1>Home</h1>)}} />
            <Route path="/supplierRFQ" exact strict component={supplierRFQ} />
            <Route path="/newsupplierRFQ" exact strict component={newsupplierRFQ} />
            <Route path="/editsupplierRFQ" exact strict component={editsupplierRfq} />
            <Route path="/supplierQuotation" exact strict component={supplierQuotation} />
            <Route path="/newsupplierQuotation" exact strict component={newsupplierQuotation} />
            <Route path="/editsupplierQuotation" exact strict component={editsupplierQuotation} />
            <Route path="/supplierPurchaseOrder" exact strict component={supplierPurchaseOrder} />
            <Route path="/newsupplierPurchaseOrder" exact strict component={newsupplierPurchaseOrder} />
            <Route path="/editsupplierPurchaseOrder" exact strict component={editsupplierPurchaseOrder} />
            <Route path="/supplierDeliveryChallan" exact strict component={supplierDeliveryChallan} />
            <Route path="/newsupplierDeliveryChallan" exact strict component={newsupplierDeliveryChallan} />
            <Route path="/editsupplierDeliveryChallan" exact strict component={editsupplierDeliveryChallan} />
            <Route path="/supplierMRN" exact strict component={supplierMRN} />
            <Route path="/newsupplierMRN" exact strict component={newsupplierMRN} />
            <Route path="/editsupplierMRN" exact strict component={editsupplierMRN} />

            <Route path="/newcustomerRFQ" exact strict component={newcustomerRfq} />
            <Route path="/customerQuotation" exact strict component={customerQuotation} />

          </div>
        </Router>
      );
  }
}

export default App;
