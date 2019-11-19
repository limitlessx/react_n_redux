import React from 'react'
import { connect } from 'react-redux'

const UpdateUser=(props)=> {
    const id =props.match.params.id;
    const {user} = props;
    console.log('<<<<<<<',props.users, user)
    const handleclick =() =>{
        props.history.push('/');
    };
    return (
        <div className="user-details section">
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Edit User</span>
              <p>name: {user.name} </p>
              <p>age: {user.age} </p>
              <p>gender: {user.gender} </p>    
              <a className="waves-effect waves-light btn" onClick ={handleclick}><i className="material-icons left">settings_backup_restore</i>back</a>
            </div>
        </div>

    </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const getUserById = state.user.users.find( user => user.id === ownProps.match.params.id)
    return {
      user: getUserById,
      users: state.user.users
    }
  }

export default connect(mapStateToProps)(UpdateUser);
