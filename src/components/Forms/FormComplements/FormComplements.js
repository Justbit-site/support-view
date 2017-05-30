import React from 'react';
import Questions from './Questions';
import Support from './Support';
import Quotation from './Quotation';
import { Route } from 'react-router-dom'

const FormComplements = ({ match }) => {
  return (
    <div>
      <Route exact path='/' component={Questions}/>
      <Route exact path='/Questions' component={Questions}/>
      <Route exact path='/support' component={Support}/>
      <Route exact path='/Quotation' component={Quotation}/>
    </div>
  );
}

export default FormComplements
