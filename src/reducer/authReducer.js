// const initState = {
//     authStatus: null
// }
  
// const authReducer = (state = initState, action) => {
// switch (action.type) {
//     case 'LOGIN_SUCESS':
//         console.log('login sucess')
//         const isAuth = state.users.filter( user => user.email == action.payload.email )
//         console.log("isAuth", isAuth)
//         return {
//             ...state,
//             authStatus: true 
//         }
//     case 'LOGIN_ERROR':
//         console.log('login failed')
//         const isAuthm = state.users.filter( user => user.id != action.payload.id )
//         return {
//             ...state,
//             authStatus: false
//         }
//     default:
//         return state;
// }
// };
  
// export default authReducer;