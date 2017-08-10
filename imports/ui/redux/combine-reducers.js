import { combineReducers } from 'redux';
// import { FormRenderer } from './modules/feedBackForm'
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  form: formReducer
})
