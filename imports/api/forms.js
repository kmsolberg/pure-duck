import { Mongo } from 'meteor/mongo';
 
export const Forms = new Mongo.Collection('forms');

Forms.insert({
    _id: 'my_form'
})