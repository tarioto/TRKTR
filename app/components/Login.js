import React, { Component, PropTypes } from 'react';
import { Button, TextInput } from 'react-desktop/macOs';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };

  handleLogin() {
    const { onLogin } = this.props;
    const username = this.refs.username.value;

    onLogin({ username, loggedIn: true });

    this.props.router.push('/loggedin');
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <TextInput ref="username" type="text" />
        <Button onClick={::this.handleLogin}>Log In</Button>
      </div>
    );
  }
}
