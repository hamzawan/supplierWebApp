import React, { Component } from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faPencilAlt, faBoxOpen, faUserFriends, faUserCircle } from '@fortawesome/free-solid-svg-icons';
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

import customerRFQ from './customerRFQ';
import newcustomerRFQ from './newcustomerRFQ';
import editcustomerRfq from './editcustomerRFQ';
import customerQuotation from './customerQuotation';
import newcustomerQuotation from './newcustomerQuotation';
import editcustomerQuotation from './editcustomerQuotation';
import customerPurchaseOrder from './customerPurchaseOrder';
import newcustomerPurchaseOrder from './newcustomerPurchaseOrder';
import editcustomerPurchaseOrder from './editcustomerPurchaseOrder';
import customerDeliveryChallan from './customerDeliveryChallan';
import newcustomerDeliveryChallan from './newcustomerDeliveryChallan';
import editcustomerDeliveryChallan from './editcustomerDeliveryChallan';
import customerMRN from './supplierMRN';
import newcustomerMRN from './newsupplierMRN';
import editcustomerMRN from './editsupplierMRN';
library.add(faTrashAlt, faEdit, faPencilAlt, faBoxOpen, faUserFriends, faUserCircle );

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

            <Route path="/customerRFQ" exact strict component={customerRFQ} />
            <Route path="/newcustomerRFQ" exact strict component={newcustomerRFQ} />
            <Route path="/editcustomerRFQ" exact strict component={editcustomerRfq} />
            <Route path="/customerQuotation" exact strict component={customerQuotation} />
            <Route path="/newcustomerQuotation" exact strict component={newcustomerQuotation} />
            <Route path="/editcustomerQuotation" exact strict component={editcustomerQuotation} />
            <Route path="/customerPurchaseOrder" exact strict component={customerPurchaseOrder} />
            <Route path="/newcustomerPurchaseOrder" exact strict component={newcustomerPurchaseOrder} />
            <Route path="/editcustomerPurchaseOrder" exact strict component={editcustomerPurchaseOrder} />
            <Route path="/customerDeliveryChallan" exact strict component={customerDeliveryChallan} />
            <Route path="/newcustomerDeliveryChallan" exact strict component={newcustomerDeliveryChallan} />
            <Route path="/editcustomerDeliveryChallan" exact strict component={editcustomerDeliveryChallan} />
            <Route path="/customerMRN" exact strict component={customerMRN} />
            <Route path="/newcustomerMRN" exact strict component={newcustomerMRN} />
            <Route path="/editcustomerMRN" exact strict component={editcustomerMRN} />

          </div>
        </Router>
      );
  }
}

export default App;
