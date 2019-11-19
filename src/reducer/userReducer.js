const initState = {
    users: [
      {id: '1', name: 'John', age: '30', gender: 'm', email: 'bjohn@gmail.com', isLoggin: false},
      {id: '2', name: 'wonda', age: '21', gender: 'f', email: 'blah@gmail.com', isLoggin: false},
      {id: '3', name: 'jason', age: '25', gender: 'f', email: 'blah@gmail.com', isLoggin: false},
      {id: '4', name: 'dave', age: '40', gender: 't', email: 'dave@gmail.com', isLoggin: false},
    ], 
    isAuth: null, 

  }
  
  const userReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_USER':
        console.log('this is working use creator', action.type, action.payload.id)
        return {
          ...state,
          users: [...state.users, action.payload]
        }
      case 'UPDATE_USER':
        // console.log('this is working update', action.type, action.payload.id)
        const updatedUser = state.users.map( user => user.id === action.payload.id? action.payload : user)
        return {
          ...state,
          users: updatedUser
        }
      case 'DELETE_USER':
        const fileredUser = state.users.filter( user => user.id !== action.payload.id )
        return {
          ...state,
          users: fileredUser
        }
        case 'LOGIN_SUCESS':
            const usrStatus = state.users.find(
              user => {
                if(user.email === action.payload.email){
                  user.isLoggin = true
                  return user
                }
                
              }
            )
            console.log('usrStatus', usrStatus)
            return {
              ...state,
              isAuth: usrStatus !== undefined ? true : false,
              message: ' you are in'
            }
            
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isAuth: false,
            }
      default:
        return state;
    }
  };
  
  export default userReducer;