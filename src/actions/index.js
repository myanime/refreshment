import C from '../constants'
import axios from "axios";

export const changeUserName = (username) => ({
  type: C.ADD_USER,
  username: username
})

export const changeLocation = (location) => ({
  type: C.CHANGE_LOCATION,
  location: location
})

export const removeItem = (id) => ({
  type: C.REMOVE_ITEM,
  id: id
})

export const getEmail = () => ({
  type: C.GET_EMAIL,
  payload: axios({
    method: 'get',
    url: 'https://ryanbase-cefdb.firebaseio.com/custom/-Kl6-0gHEhIDN2AnZcLX.json'
  })
})