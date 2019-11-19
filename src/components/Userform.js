import React, { Component } from 'react'
import {createUser} from '../action/userAction'
import { connect } from 'react-redux'

class Userform extends Component {
  state = {
    id: '',
    name: '', 
    age: '',
    gender: '',
    email: '',
  }
  handleChange = (e) => {
    this.setState({
      id : Math.floor(Math.random()*100).toString(),
      [e.target.id]: e.target.value
    })
  }
  goToUsersPage = () =>{
    this.props.history.push('/users')
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
   
    this.props.createUser(this.state);
    this.setState({
      id: '',
      name: '', 
      age: '',
      gender: '',
      email: '',
    })
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create User</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="age">Age</label>
            <input type="text" id='age' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="gender">Gender</label>
            <input type="text" id='gender' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="Email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0 left">Add</button>
          </div>
          <div className="input-field" onClick={this.goToUsersPage}>
            <button className="btn pink lighten-1 z-depth-0 left">Done</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (user) => dispatch(createUser(user))
  }
}

export default connect(null, mapDispatchToProps)(Userform)

