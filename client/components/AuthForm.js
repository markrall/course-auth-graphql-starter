import React, { Component } from 'react'

class AuthForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  onSubmit(event) {
    event.preventDefault()
    const { email, password } = this.state

    this.props.onSubmit({ email, password })
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s6">
          <div className="input-field">
            <input
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
              placeholder="Email"
            />
          </div>
          <div className="input-field">
            <input
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="errors">
            {this.props.errors.map(error => (
              <div key={error}>{error}</div>
            ))}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default AuthForm
