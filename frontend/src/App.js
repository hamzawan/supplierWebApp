import React, { Component } from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faMobileAlt, faGlobeAsia, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from './Header';
import Login from './Login';
import supplierRfq from './supplierRFQ.js';
import customerRfq from './customerRFQ.js';
import supplierQuotation from './supplierQuotation';
import customerQuotation from './customerQuotation';
import supplierPurchaseOrder from './supplierPurchaseOrder';
import supplierDeliveryChallan from './supplierDeliveryChallan';
import supplierMRN from './supplierMRN';
library.add(faMapMarkerAlt, faPhone, faMobileAlt, faGlobeAsia, faEnvelope);

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
            <Route path="/" exact strict render={()=>{return(<h1>Home</h1>)}} />
            <Route path="/customerRFQ" exact strict component={customerRfq} />
            <Route path="/supplierRFQ" exact strict component={supplierRfq} />
            <Route path="/supplierQuotation" exact strict component={supplierQuotation} />
            <Route path="/customerQuotation" exact strict component={customerQuotation} />
            <Route path="/supplierPurchaseOrder" exact strict component={supplierPurchaseOrder} />
            <Route path="/supplierDeliveryChallan" exact strict component={supplierDeliveryChallan} />
            <Route path="/supplierMRN" exact strict component={supplierMRN} />

          </div>
        </Router>
      );
  }
}

export default App;
