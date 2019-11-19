
export const createUser = (user) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_USER', payload:user });
    console.log('action worked')
  }
};
export const updateUser = (user) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'UPDATE_USER', payload:user });
    console.log('updated worked')
  }
};

export const deleteUser = (user) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'DELETE_USER', payload:user });
    console.log('dletet action worked')
  }
};

export const loginUser = (user) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'DELETE_USER', payload:user });
    console.log('login action worked')
  }
};


