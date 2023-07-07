const ADD_PROJECT = 'ADD-PROJECT'
const DELETE_PROJECT = 'DELETE-PROJECT'
const UPDATE_PROJECT_TEXT = 'UPDATE-PROJECT-TEXT'
const SET_PROJECT = 'SET-PROJECT'


let initialState = {
  projects: [
    {id: 1, title: 'Camper', description: 'Tourist guide', url: 'https://github.com/teasa7/camper', photo: './Camper.png'},
    {id: 2, title: 'Hotel', description: 'Hotel website', url: 'https://github.com/teasa7/hotel', photo: './Hotel.png'}   
  ],
  newProjectTitle: '',
  newProjectDescription: '',
  newProjectUrl: '',
  newProjectPhoto: ''
}

const projectReducer = (state = initialState, action) => { 
  switch(action.type) {
    case ADD_PROJECT: {
      return {
        ...state,
        newProjectTitle: '',
        newProjectDescription: '',
        newProjectUrl: '',
        projects: [...state.projects, {id: 3, title: state.newProjectTitle, description: state.newProjectDescription, url: state.newProjectUrl, photo: state.newProjectPhoto}]
      }
    }
    case SET_PROJECT: {
      return {
        ...state,
        projects: [...state.projects, ...action.projects]
      }
    }
    case UPDATE_PROJECT_TEXT: {
      return {
        ...state,
        newProjectTitle: action.newTitle,
        newProjectDescription: action.newDescription,
        newProjectUrl: action.newUrl,
        newProjectPhoto: action.newPhoto
      }
    }    
    case DELETE_PROJECT: {
      return {
        ...state,
        projects: state.projects.filter((project) => {
          return project.id !== action.projectID;
        })
      }
    }
    default:
      return state;
  }
}

export const addProjectCreator = () => ({ type: ADD_PROJECT })
export const deleteProjectCreator = (projectID) => ({ type: DELETE_PROJECT, projectID })
export const setProjectCreator = (projects) => ({ type: SET_PROJECT, projects })
export const changeProjectCreator = (newTitle, newDescription, newUrl, newPhoto) => ({ type: UPDATE_PROJECT_TEXT, newTitle, newDescription, newUrl, newPhoto })

export default projectReducer;