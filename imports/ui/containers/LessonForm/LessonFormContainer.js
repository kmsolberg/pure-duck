// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
// import { connect } from 'react-redux';
// import { createContainer } from 'meteor/react-meteor-data';
// import { Forms } from '../../../api/forms';
// import PropTypes from 'prop-types';

// import LessonForm from './LessonForm';

// class LessonFormContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             redirectToStudentProfile: false
//         }
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         // if (this.state.value) {
//             const title = this.props.values.values.lessonDate;
//             const form = 'Lesson';
//             const oneToFiveRadio = parseInt(this.props.values.values.oneToFiveRadio);
//             const trueOrFalse = this.props.values.values.trueOrFalse;
//             const input1 = this.props.values.values.input1;
//             const input2= this.props.values.values.input2;
//             const input3= this.props.values.values.input3;
//             const input4= this.props.values.values.input4;
//             const input5= this.props.values.values.input5;
//             Meteor.call('forms.addProfileFormData', title, form, oneToFiveRadio, trueOrFalse, input1, input2, input3, input4, input5)
//         // }
//         // Hint: This will reset the value on each input
//         // this.state.value = '';
//         // this.setState({ redirectToStudentProfile: true })

//     render () {
//         if (this.state.redirectToStudentProfile) {
//             return (
//                 <Redirect to="/student/:id"/>
//             )
//         }
//         return (
//             <LessonForm handleSubmit={this.handleSubmit} />
//         )
//     }
// }

// LessonFormContainer.propTypes = {
//   forms: PropTypes.array.isRequired,
// };

// function mapStateToProps(state) {
//     return {
//         values: state.form.forms,
//     };
// }

// const LessonContainer = createContainer(() => {
//     Meteor.subscribe('forms');
//     return{
//         forms: Forms.find().fetch()
//     }
// }, LessonFormContainer)

// export default connect(mapStateToProps)(LessonContainer)