const initStateLog = {

    
    // log: [
    //   {id: '1', name: 'John', age: '30', gender: 'm', email: 'bjohn@gmail.com'},
    //   {id: '2', name: 'wonda', age: '21', gender: 'f', email: 'blah@gmail.com'},
    //   {id: '3', name: 'jason', age: '25', gender: 'f', email: 'blah@gmail.com'},
    //   {id: '4', name: 'dave', age: '40', gender: 't', email: 'blah@gmail.com'},
    // ]
  }
  
  const userReducer = (state = initState, action) => {
      console.log("reducer worked", action.type)
    switch (action.type) {
      case 'CREATE_USER':
        console.log('this is working use creator', action.type, action.payload.id)
        return {
          ...state,
          users: [...state.users, action.payload]
        }
      case 'DELETE_USER':
        const fileredUser = state.users.filter( user => user.id != action.payload.id )
        return {
          ...state,
          users: fileredUser
        }
      default:
        return state;
    }
  };
  
  export default userReducer;