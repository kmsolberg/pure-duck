import { Accounts } from 'meteor/accounts-base';
import { Users } from '../../api/users';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
  extraSignupFields: [{
    fieldName: 'full-name',
    fieldLabel: 'Enter your name',
    visible: true,
    validate: function (value, errorFunction) {
      if (!value) {
        errorfunction('Please enter your name');
        return false;
      } else {
        return true;
      }
    }
  }]
});
