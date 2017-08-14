// StudentSchema = new SimpleSchema({
//   email: {
//     type: String,
//     max: 100
//   },
//   password: {
//     type: String,
//     max: 50
//   }
// });

// CustomerSchema = new SimpleSchema({
//   billingAddress: {
//     type: AddressSchema
//   },
//   shippingAddresses: {
//     type: [AddressSchema],
//     minCount: 1
//   }
// });
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

Meteor.methods({

    'registerUser'() {
        Accounts.createUser({
            email : 'lau12@gmail.com',
            password : 'laulau',
            profile: {
                cohort: '12134',
                class: 'ADP'
            }
        })
    },
})
