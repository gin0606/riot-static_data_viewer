import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ChampionActions from '../actions/ChampionActions.js';

const ENTER_KEY_CODE = 13;

export default class ChampionFilterTextInput extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      value: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.execFilter = this.execFilter.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onKeyDown(e) {
    if (e.keyCode !== ENTER_KEY_CODE) { return; }
    this.execFilter();
  }

  execFilter() {
    ChampionActions.filter(this.state.value);
  }

  render() {
    return (
      <FormGroup>
        <ControlLabel>Search as you Type</ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter Champion name"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onBlur={this.execFilter}
        />
      </FormGroup>
    );
  }
}
