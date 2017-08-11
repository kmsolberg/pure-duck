import { combineReducers } from 'redux';
import { FormRedirectRenderer } from './modules/Form'
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  form: formReducer,
  formRedirect: FormRedirectRenderer,
})
