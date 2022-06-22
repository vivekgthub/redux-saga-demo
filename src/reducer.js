import { GET_USERS_SUCCESS } from './actions';

const myFirstReducer = (state = {users: [] /*here this is initial state */ }, action) => {

switch(action.type) {
    case GET_USERS_SUCCESS:
        return { ...state, users: action.users }
    default: 
        return state;
}

};

export default myFirstReducer;