import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class FormComplement extends Component {
  sendForm = () => {
    return true;
  }
  render() {
    return (
      <div>
        <TextField
          hintText="Pregunta"
          floatingLabelText="¿Como hacen ...?"
          fullWidth={true}
          multiLine={true}
          rows={2}
          rowsMax={6}
        />
        <RaisedButton
          label="Enviar pregunta"
          primary={true}
          onTouchTap={this.sendForm}
        />
      </div>
    );
  }
}
