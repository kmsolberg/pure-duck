import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'registerUser'(email, password, cohort, course, role) {
        Accounts.createUser({
            email : email,
            password : password,
            profile: {
                cohort: cohort,
                class: course,
                role: role
            }
        })
    },
})
