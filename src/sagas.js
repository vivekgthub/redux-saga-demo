import { call, put, takeEvery } from 'redux-saga/effects'; 
//takeEvery means it spawn(produce) saga on each action dispatch
//call for api call
// put for calling action
import { GET_USERS_FETCH, GET_USERS_SUCCESS} from './actions';

function usersFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json());
}

//this is generator function
function* workGetUsersFetch() {
    const users = yield call(usersFetch); //yeild is waiting for api call to finish
    yield put({ type: GET_USERS_SUCCESS, users}) // GET_USERS_SUCCESS mnust be handled in reducer
}

//this is generator function
function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch); //takeLatest is preferable
}

export default mySaga;
