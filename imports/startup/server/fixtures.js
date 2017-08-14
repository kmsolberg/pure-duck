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
          cohort: '8'
      }
    });
  }
});