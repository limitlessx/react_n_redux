
export const loginUser = (user) => {
    return (dispatch, getState) => {
        // make async call to database
        console.log('login action worked', user)
        dispatch({ type: 'LOGIN_SUCESS', payload:user });
        }
};

export const LogoutUser = () => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'LOGOUT_SUCCESS' });
        console.log('login action worked')
        }
};

  
  
  