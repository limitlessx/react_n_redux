import React, { Component } from 'react';
import Userlist from './Userlist'
// import UserSummary from './userSummary'
import Userform from './Userform'
import { connect } from 'react-redux'
import {deleteUser} from '../action/userAction'
import {Redirect} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Users extends Component {
  delUser =(user)=>{
    // console.log("received", user)
    this.props.dispatch(deleteUser(user))
  }
  whenMouseOver = (e) =>{
    console.log('mouse is over',e)
  }
  render(){
    
    const { users,isAuth } = this.props;
    console.log("this.props.isAuth>>>>", users);
    // if(!isAuth===true) return <Redirect to ='/login'></Redirect>
    return (
      <div className="users container">
        <div className="row">
          <div className="col s12 m5">
            <Userform />
          </div>
          <div className="col s12 m6">
            <Userlist users={users} delUser={this.delUser} />
          </div>
          <button onMouseOver = { this.whenMouseOver}>mouse over</button>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    users: user.users,
    isAuth: user.isAuth,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteUser: (user) => dispatch(deleteUser(user))
//   }
// }




export default connect(mapStateToProps)(Users);
// users: state.user(this is from rootReducer).users