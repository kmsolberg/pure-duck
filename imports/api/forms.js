import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check'
 
export const Forms = new Mongo.Collection('forms');


if (Meteor.isServer) {
  Meteor.publish('forms', function formsPublication() {
    return Forms.find({owner: this.userId})
  })
}

// Forms.schema = new SimpleSchema({
//   course: {type: String},
//   cohort: {type: Number}
// });

// Forms.attachSchema(Forms.schema);

// Allow Client to do these things only to this collection...
Meteor.methods({
  // add profile form data to db
    'forms.addProfileFormData' (
        course,
        cohort,
        form,
        title,
        date,
        oneToFiveRadio, 
        trueOrFalse, 
        input1, 
        input2, 
        input3, 
        input4, 
        input5
    ) {
        check(cohort, Number);
        check(form, String);
        check(title, String);
        check(date, String);
        check(oneToFiveRadio, Number);
        check(trueOrFalse, String);
        check(input1, String);
        check(input2, String);
        check(input3, String);
        check(input4, String);
        check(input5, String);

        if (!this.userId) {
            throw new Meteor.Error('You are not authorized')
        }

        Forms.insert({
            owner: this.userId,
            class: course,
            cohort: cohort,
            form: form,
            title: title,
            createdAt: date,
            oneToFiveRadio: oneToFiveRadio,
            trueOrFalse: trueOrFalse,
            input1: input1,
            input2: input2,
            input3: input3,
            input4: input4,
            input5: input5
        })
    },

    'forms.showAllReviews'() {
        // check(taskId, String)

        Forms.find();
        // if (task.private && task.owner !== Meteor.userId()) {
        //   // If the task is private, make sure only the owner can delete it
        //   throw new Meteor.Error('not-authorized');
        // }
    },

    // 'forms.filterCohort' (value) {
    //     Forms.find({cohort: value}).fetch()
    // },

    'forms.filterReviews'(classes, cohort, form, title) {
        check(cohort, Number);
        check(classes, String);
        check(title, String);
        check(form, String);
        
        return Forms.find({
            class: classes,
            cohort: cohort,
            form: form,
            title: title
        }).fetch()
    }
})
