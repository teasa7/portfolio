import React from "react";
import { connect } from 'react-redux';
import Projects from "./Projects";
import { addProject, deleteProject, setProject, changeProject } from "./../../redux/projectReducer";

let mapStateToProps = (state) => {
  return {
    projects: state.projectPage.projects,
    newProjectTitle: state.projectPage.newProjectTitle,
    newProjectDescription: state.projectPage.newProjectDescription,
    newProjectUrl: state.projectPage.newProjectUrl,
    newProjectPhoto: state.projectPage.newProjectPhoto,
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     addProject: () => {
//       dispatch(addProjectCreator());
//     },
//     deleteProject: (projectID) => {
//       dispatch(deleteProjectCreator(projectID));
//     },
//     changeProject: (title, description, url, photo) => {
//       dispatch(changeProjectCreator(title, description, url, photo));
//     },
//     setProjectCreator: (projects) => {
//       dispatch(setProjectCreator(projects));
//     }
//   }
// }

const ProjectsContainer = connect(mapStateToProps, {addProject, deleteProject, changeProject, setProject})(Projects);

export default ProjectsContainer;