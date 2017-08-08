import { Mongo } from 'meteor/mongo';
 
export const Forms = new Mongo.Collection('forms');

// FormSchema = new SimpleSchema ({
//     "title": {
//         type: String,
//         label: "Name of the form"
//     },
//     "cohort": {
//         type: Number,
//         label: "Which cohort is the form for?"
//     },
//     "class": {
//         type: String,
//         label: "Which class is the form for?"
//     },
//     "formSubmitted": {
//         type: Date,
//         label: "The date the form was submitted"
//     }
// });

// Forms.attachSchema( FormSchema );


// Allow Client to do these things only to this collection...
Meteor.methods({
  // add todo
  'forms.addProfileFormData' (data) {
    // check(text, String)
    // if (!this.userId) {
    //   throw new Meteor.Error('todos.toggleComplete.not-authorized')
    //     'Your are not authorized to update todo for others'
    // }
    Forms.insert({
      title: data,     
      complete: false,
      owner: this.userId
    })
  },
})

