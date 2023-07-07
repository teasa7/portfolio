import React from "react"
import styles from "./Projects.module.css"
import Project from "./Project/Project"

const Projects = (props) => {
  let projectsElements = props.projects.map( project => <Project key={project.id} id={project.id} title={project.title} description={project.description} url={project.url} photo={project.photo} />)

  let newProjectsElementTitle = React.createRef();
  let newProjectsElementDescription = React.createRef();
  let newProjectsElementUrl = React.createRef();

  let onAddProject = () => {
    props.addProject();
  }
  let onChangeProject = () => {
    let newTitle = newProjectsElementTitle.current.value;
    let newDescription = newProjectsElementDescription.current.value;
    let newUrl = newProjectsElementUrl.current.value;
    let newPhoto = '';
    props.changeProject(newTitle, newDescription, newUrl, newPhoto);
  }
  // let onDeleteProject = () => {
  //   let newText = newProjectsElement.current.id;
  //   props.changeMessage();
  // }

  return (
    <div>
      <div className={styles.projects}>
        {projectsElements}
      </div>
      <div>
        <textarea ref={newProjectsElementTitle} value={props.newProjectTitle} onChange={onChangeProject} />
        <textarea ref={newProjectsElementDescription} value={props.newProjectDescription} onChange={onChangeProject} />
        <textarea ref={newProjectsElementUrl} value={props.newProjectUrl} onChange={onChangeProject} />
        <button onClick={onAddProject}>Add</button>
        {/* <button onClick={onDeleteProject}>Delete</button> */}
      </div>
    </div>
  )
}

export default Projects;