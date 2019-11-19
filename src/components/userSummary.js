import React from 'react'
import ContentEditable from 'react-contenteditable'

const UserSummary = ({usr, delUser}) => {
return (

    <tbody >
        <tr>
            <ContentEditable html={<td>{usr.id}</td>}/>
            <td>{usr.id}</td>
            <td>{usr.name}</td>
            <td>{usr.age}</td>
            <td>{usr.gender}</td>
            <td>{usr.email}</td>
            <td><button className="waves-effect waves-light btn" onClick={()=>delUser(usr)}>Delete</button></td>

        </tr>  
    </tbody>
 
)}

export default UserSummary