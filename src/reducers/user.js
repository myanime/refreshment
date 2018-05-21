import C from '../constants'

const user = (state = "admin", action) => {
    switch (action.type) {
        case C.CHANGE_USERNAME:
            return action.username
        case C.GET_EMAIL + C.FULFILLED:
            return action.payload.data.email
        case C.GET_EMAIL + "_REJECTED":
            return "Big Fat Problem "
        default:
            return state
    }
}

export default user