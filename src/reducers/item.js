import C from '../constants'

const item = (state = [], action) => {
  switch (action.type){
    case C.ADD_ITEM:
      return [...state, {
        product: action.product,
        id: action.id
      }]
    case C.REMOVE_ITEM:{
      return state.filter(product => product.id !== action.id)
    }
    default:
      return state
  }
}

export default item