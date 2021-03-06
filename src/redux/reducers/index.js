import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import people from './peopleReducer';
import feedback from './feedbackReducer';

//Lets make a bigger object for our store, with the objects from our reducers.
//This is why we get this.props.reduxStore.user.isLoading
const store = combineReducers({
  user,
  login,
  people,
  feedback
});

export default store;
