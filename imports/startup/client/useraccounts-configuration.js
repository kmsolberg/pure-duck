import { Accounts } from 'meteor/accounts-base';
// import { Users } from '../../api/users';

Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
});