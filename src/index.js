import React, { Component } from 'react';
import { render } from 'react-dom';
import { areValidLoginCredentials } from './validations';
import { Username, Password } from './components/Input';
import ValidationMessages from './components/ValidationMessages';

class App extends Component {
  constructor() {
    super();

    this.state = {
      validations: [],
      data: {
        username: '',
        password: ''
      }
    };

    [
      'setUsername',
      'setPassword',
      'isButtonDisabled',
      'login'
    ].forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  setUsername(event) {
    const data = {
      ...this.state.data,
      username: event.target.value
    };
    const validations = areValidLoginCredentials(data).fold(
      a => a,
      _ => []
    );

    this.setState({
      data,
      validations
    });
  }

  setPassword(event) {
    const data = {
      ...this.state.data,
      password: event.target.value
    };
    const validations = areValidLoginCredentials(data).fold(
      a => a,
      _ => []
    );

    this.setState({
      data,
      validations
    });
  }

  isButtonDisabled() {
    const { data, validations } = this.state;
    return (
      !data.username || !data.password || validations.length
    );
  }

  login() {
    if (this.isButtonDisabled()) {
      return;
    }
    alert(`You're now logged in!`);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <p className="badge">
          React + Folktale based form with validations
        </p>
        <div className="form-group">
          <Username onChange={this.setUsername} />
        </div>
        <div className="form-group">
          <Password onChange={this.setPassword} />
        </div>
        <ValidationMessages
          messages={this.state.validations}
          className="badge danger margin-top-small"
        />
        <button
          className="margin-top-small"
          disabled={this.isButtonDisabled()}
          onClick={this.login}
        >
          Login
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
