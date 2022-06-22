import './App.css';
import { useDispatch, useSelector } from 'react-redux'; //usedispatch calls action and useselector grabs the state from redux
import { getUsersFetch} from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users); 
  return (
    <div className="App">
      <button className='subButton1' onClick={() => dispatch(getUsersFetch())}>Get Users</button>
       <div> USERS are: {users.map((user => (<div><div>ID: {user.id}</div>NAME: {user.name}</ div>)))}</div>
   </div>
  );
}

export default App;
