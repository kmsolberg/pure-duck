import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
 
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
