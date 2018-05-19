import C from '../constants'
import {v4} from 'uuid'
import axios from 'axios'
export const addItem = (product) => {
  const newUser = {
    type: C.ADD_ITEM,
    id: v4(),
    product: product
  }
  return newUser
}

export const printSwearWord = () => {
  let choose = Math.floor(Math.random() * 3)
  switch (choose){
    case 0:
      window.console.log("Heööööl you")
      break
    case 1:
      window.console.log("Smilz cker")
      break
    case 2:
      window.console.log("Nastz runt")
      break
    default:
      window.console.log("Son of a son")
  }
  return {type: C.PRINT_SWEAR_WORD}
}
