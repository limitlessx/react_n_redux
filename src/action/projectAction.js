import axios from "axios";

export const addProject = (project) => {
    return (dispatch, getState) => {
      dispatch({ type: 'CREATE_PROJECT', payload:project });
      console.log('action worked')
    }
  };
  export const deleteProject = (project) => {
    return (dispatch, getState) => {
      dispatch({ type: 'DELETE_PROJECT', payload:project });
      console.log('dletet action worked')
    }
  };
  export const getProjects = () => {
    return (dispatch, getState) => {
      // make async call to database
      axios.get('http://34.215.246.172/api')
        .then( ({data}) =>{
            console.log('receive api data', data)
            dispatch({ type: 'GET_PROJECTS_SUCCESS', payload: data });
        })
        .catch( error =>{
          console.log('fail to receive api', error)
        })
    }
  };


  export const apiLink = () =>{
    return 'http://34.215.246.172/api'
  }