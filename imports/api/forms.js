import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';
 
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
  // add profile form data to db
  'forms.addProfileFormData' (title, oneToFiveRadio, trueOrFalse, input1, input2, input3, input4) {
    // check(text, String)
    // if (!this.userId) {
    //   throw new Meteor.Error('todos.toggleComplete.not-authorized')
    //     'Your are not authorized to update todo for others'
    // }
    Forms.insert({
        title: title,     
        // TODO: add data format
        //   owner: this.userId
        owner: `Brian :)`,
        createdAt: new Date().toLocaleTimeString(),
        // class
        // cohort
        // form
        oneToFiveRadio: oneToFiveRadio,
        trueOrFalse: trueOrFalse,
        input1: input1,
        input2: input2,
        input3: input3,
        input4_takeaway: input4
    })
  },
})

