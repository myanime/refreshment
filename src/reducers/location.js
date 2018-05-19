import C from '../constants'

const location = (state = "Berlin", action) => {
  switch (action.type){
    case C.CHANGE_LOCATION:
      return action.location
    default:
      return state
  }
}

export default location