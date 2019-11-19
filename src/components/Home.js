import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProjects } from '../action/projectAction'
import { addProject } from '../action/projectAction'

class Home extends Component {
  constructor(props){
    super(props)
    this.contentEditable = React.createRef();
  }
  componentDidMount() {
    this.props.getProjects();
  };
  handleChange = evt => {
    console.log('worked')
  };
  render(){
    const {projects} = this.props
    // const projectList = projects.length >0 ? (projects.map((p, i) => <p key={i}> {p.description}</p>)): (<div>not page found</div>)
  
    return (
      <div className="Home">
          <h3>this is home page</h3>
          {projects && projects.map((p, i) => <p key={i}> {p.description}</p>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(getProjects()), 
    addProject: (project) => dispatch(addProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
