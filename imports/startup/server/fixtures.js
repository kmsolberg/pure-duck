import { Meteor } from 'meteor/meteor';

// import { ToDos } from '../../api/todos';
import { Accounts } from 'meteor/accounts-base';


Meteor.startup(() => {
  let user = {};
  if ( Meteor.users.find().count() === 0 ) {
    user = Accounts.createUser({
      email : '123123@gmail.com',
      password : 'laulau',
      profile: {
          message: 'THIS IS A DEMO ACCOUNT IF THERES NO OTHER USERS FOUND',
          cohort: 8,
          course: "WDP",
          role: "student"
      }
    });
  }
});