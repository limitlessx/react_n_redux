
import React from 'react'
import { connect } from 'react-redux'
import resObject from './Responsive'

const Userdetails=(props)=> {
    const id =props.match.params.id;
    const {user} = props;
    console.log('>>>>>>>',props.users, user)
    const handleclick =() =>{
        props.history.push('/');
    };
    const {OnMobile, OnAtLeastTablet, OnAtMostPhablet, OnDesktop} = resObject
    return (
      <OnMobile>
      <div className="user-details section">
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">User Details</span>
              <p>name: {user.name} </p>
              <p>age: {user.age} </p>
              <p>gender: {user.gender} </p>    
              <a className="waves-effect waves-light btn" onClick ={handleclick}><i className="material-icons left">settings_backup_restore</i>back</a>
            </div>
        </div>
    </div>
    </OnMobile>
    )
}
const mapStateToProps = (state, ownProps) => {
    const getUserById = state.user.users.find( user => user.id === ownProps.match.params.id)
    return {
      user: getUserById,
      users: state.user.users
    }
  }

export default connect(mapStateToProps)(Userdetails);
