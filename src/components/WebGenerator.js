import React, { Component } from 'react'
import {loginUser} from '../action/authAction'
import { connect } from 'react-redux'
import './webgenerator.css'

class WebGenerator extends Component {
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

  
  render() {
    return (
      <div className="container">
          <p>Web Genrator</p>
          <form>
            <div class="row">
                <div class="col s6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <p>License Upload No File Chosen</p>
                        </div>
                    </div>
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <div class="row">
                                <div class="input-field col s6">
                                        <div >
                                            <p>Customer Name</p>
                                            <input  type="text" class="validate" />
                                        </div>
                                    <div>
                                        <p>License Expiraiton</p>
                                        <label>
                                            <input type="checkbox" class="filled-in" />
                                            <span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <p>Max Domain</p>
                                        <input type="number" name="quantity" min="1" max="5" class="validate" />
                                    </div>
                                </div>
                                <div class="input-field col s6">
                                    <div>
                                        <p>CA for RA</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Term Expiration Date</p>
                                        <input type="date" value="07/31/2019" class="datepicker" />
                                    </div>
                                    <div>
                                        <p>Max Node in Cluster</p>
                                        <input  type="number" name="quantity" min="1" max="5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <div class="row">
                                <div class="input-field col s6">
                                        <div >
                                            <p>Customer Name</p>
                                            <input  type="text" class="validate" />
                                        </div>
                                    <div>
                                        <p>License Expiraiton Date</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Max Domain</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                </div>
                                <div class="input-field col s6">
                                    <div>
                                        <p>CA for RA</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Term Expiration Date</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Max Node in Cluster</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <div class="row">
                                <div class="input-field col s6">
                                        <div >
                                            <p>Customer Name</p>
                                            <input  type="text" class="validate" />
                                        </div>
                                    <div>
                                        <p>License Expiraiton Date</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Max Domain</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                </div>
                                <div class="input-field col s6">
                                    <div>
                                        <p>CA for RA</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Term Expiration Date</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Max Node in Cluster</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <div class="row">
                                <div class="input-field col s6">
                                        <div >
                                            <p>Customer Name</p>
                                            <input  type="text" class="validate" />
                                        </div>
                                    <div>
                                        <p>License Expiraiton Date</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Max Domain</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                </div>
                                <div class="input-field col s6">
                                    <div>
                                        <p>CA for RA</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Term Expiration Date</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                    <div>
                                        <p>Max Node in Cluster</p>
                                        <input  type="text" class="validate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col s6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(WebGenerator)

