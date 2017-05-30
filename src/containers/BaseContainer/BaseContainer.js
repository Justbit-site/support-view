import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiTheme from './../../config/MuiTheme';
import Navbar from './../../components/Layout/Navbar';
import Support from './../../components/Support';
import './BaseContainer.css';

export default class BaseContainer extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={MuiTheme.getMuiTheme}>
          <div style={{ maxWidth : '1500px', margin : 'auto'}}>
          <Navbar />
          <Route path="/" component={Support}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}
