
export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

//this will trigger our middleware
export const getUsersFetch = () => ({
    type: GET_USERS_FETCH 
});