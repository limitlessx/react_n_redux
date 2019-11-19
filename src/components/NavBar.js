import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {LogoutUser} from '../action/authAction'

const NavBar = (props) =>{
    const Logout =() =>{
        console.log('logging out')
        props.LogoutUser();
    }

    console.log('isAuth-------', props.isAuth)
    const LoginOrLogout = props.isAuth ? <li><NavLink  to="" onClick={Logout} >Logout</NavLink></li>: <li><NavLink to="/login" >Login</NavLink></li>

    return (
      <div className="App">
          <div className="container">
            <nav>
                <div className="nav-wrapper grey darken-3">
                <Link  to="/" className="brand-logo right">Logo</Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                        <Link to="/web" >WebGenerator</Link>
                    </li>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/users"  >Users</Link>
                    </li>
                    <li>
                        <Link to="/new"  >UserForm</Link>
                    </li>
                    <li>
                        <Link to="/reacthook"  >Reack Hook</Link>
                    </li>
                    {/* <li><NavLink to="/login" >Login</NavLink></li>
                    <li><NavLink  to="" onClick={Logout} >Logout</NavLink></li> */}
                    {LoginOrLogout}
                </ul>
                </div>
            </nav>
          </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
      isAuth: state.user.isAuth,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        LogoutUser: () => dispatch(LogoutUser())
    }
  }
  
export default connect (mapStateToProps, mapDispatchToProps)(NavBar);
