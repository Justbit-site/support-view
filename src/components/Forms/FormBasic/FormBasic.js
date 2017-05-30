//========= React libs =========//
import React, { Component } from 'react';

//========= Redux =========//
// React redux
import {connect} from 'react-redux';
// Actions
//import { startSave, succesSave } from '../../../actions/actions';

//========= Material ui libs =========//
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class FormBasic extends Component {
  state = {
    value: this.props.history.location.pathname && this.props.history.location.pathname !== '/'  ? this.props.history.location.pathname : '/Questions'
  };

  handleChange = (event, index, value) => {
    this.setState({
      value: value
    });
    this.props.history.push(value);
  };

  onSave = (email, company) => {
    //this.props.dispatch(startSave(email));
    //this.props.dispatch(succesSave(''));
    fetch('')
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Email"
          floatingLabelText="Email"
          fullWidth={true}
        />
        <TextField
            hintText="Empresa"
            floatingLabelText="Empresa"
            fullWidth={true}
        />
        <SelectField
          floatingLabelText="Tipo"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
        >
          <MenuItem value='/Questions' primaryText="Preguntas frecuentes"/>
          <MenuItem value="/Support" primaryText="Soporte" />
          <MenuItem value="/Quotation" primaryText="Cotización" />
        </SelectField>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { email, company, result, id } = state;
  return { email, company, result, id }
}

export default connect(mapStateToProps)(FormBasic);
