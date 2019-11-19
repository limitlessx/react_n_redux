const initState = {
    projects: []
  }
  
  const projectReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_USER':
        console.log('this is working use creator', action.type, action.payload.id)
        return {
          ...state,
          projects: [...state.projects, action.payload]
        }
      case 'DELETE_USER':
        const fileredUser = state.projects.filter( user => user.id !== action.payload.id )
        return {
          ...state,
          projects: fileredUser
        }
      case 'GET_PROJECTS_SUCCESS':
        console.log('project reducer worked', action.payload)
        return {
          ...state,
          projects: action.payload
        }
      default:
        return state;
    }
  };
  
  export default projectReducer;