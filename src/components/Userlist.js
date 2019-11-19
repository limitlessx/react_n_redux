import React from 'react'
import {Link } from 'react-router-dom';

const Userlist = ({users, delUser, props}) => {

  const editUser =(user) =>{
    console.log('editing is woring',user)
    props.history.push(`/user/${user.id}`)
    
  }

  return (
      <div>
          <table>
        <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Aage</th>
              <th>Gender</th>
              <th>Email</th>
          </tr>
        </thead>

        <tbody >
        { users && users.map(
            (usr, i) =>
        <tr key ={i} >
            <td><Link to={'/user/'+ usr.id}>{usr.id}</Link></td>
            <td>{usr.name}</td>
            <td>{usr.age}</td>
            <td>{usr.gender}</td>
            <td>{usr.email}</td>
            <td><button className="waves-effect waves-light btn" onClick={()=>delUser(usr)}>Delete</button></td>
            <td><Link to={'/user/edit/'+ usr.id}><button className="waves-effect waves-light btn blue" >Edit</button></Link></td>
         
    
        </tr>
        )}
        </tbody>
      </table>
     
  </div>   
  )
}

export default Userlist