import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'registerUser'() {
        Accounts.createUser({
            email : 'TEST3@gmail.com',
            password : 'laulau',
            profile: {
                cohort: '12134',
                class: 'ADP TEST1'
            }
        })
    },
})
