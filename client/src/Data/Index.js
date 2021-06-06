import { createContext } from 'react'


export const userContext = createContext()
export const userInitial = []
export const userReducer = (state, action) => {
    switch (action.opr) {
        case "add":
            // console.log([...state, action.user])
            return [...state, action.user]
        case "update":
            // console.log(state[0].r, action.user.r)
            action.user.kind = state[0].kind
            state = state.slice(1)
            return [action.user, ...state]
            // state[0].r = action.user.r
            // return state
        case "set":
            return action.user
        default:
            return userInitial
    }
}



export const wallContext = createContext()
export const wallInitial = []
export const wallReducer = (state, action) => {
    switch (action.opr) {
        case "add":
            // console.log([...state, action.wall])
            return [...state, action.wall]
        case "update":
            // console.log(state[0].r, action.wall.r)
            action.wall.kind = state[0].kind
            state = state.slice(1)
            return [action.wall, ...state]
            // state[0].r = action.wall.r
            // return state
        case "set":
            return action.wall
        default:
            return wallInitial
    }
}