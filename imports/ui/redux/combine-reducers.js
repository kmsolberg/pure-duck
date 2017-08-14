import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { FormRedirectRenderer } from './modules/Form'
import { reviewReducer } from './modules/Reviews';

export default combineReducers({
  form: formReducer,
  review: reviewReducer,
  formRedirect: FormRedirectRenderer,
})
