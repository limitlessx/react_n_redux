import React, { Component } from 'react'
import {loginUser} from '../action/authAction'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
class Login extends Component {
  state = {
    name: '', 
    email: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("this.props.isAuth->", this.props.isAuth);
    this.props.loginUser(this.state)
  }

  userEmail=this.state.email;
  
  render() {
    const { isAuth } = this.props 
    
    if(isAuth===true) return <Redirect to ='/users'></Redirect>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Login Page</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' onChange={this.handleChange} />
          </div>
       
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="Email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0 left">Sign In</button>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user.users,
    isAuth: state.user.isAuth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user) => dispatch(loginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

