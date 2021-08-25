import { combineReducers } from "redux";
import manageArt from './manageArt'
import manageUser from './manageUser'

const rootReducer = combineReducers({
    art: manageArt,
    users: manageUser 
})

export default rootReducer