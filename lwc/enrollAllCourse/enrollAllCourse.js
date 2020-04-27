import { LightningElement } from 'lwc';

export default class EnrollAllCourse extends LightningElement {

    allCourse = [
        {courseName:'Lightning Web Component',courseDuration:'30 Days',courseFee:'10,000',courseRating:'*****'},
        {courseName:'Aura Component',courseDuration:'20 Days',courseFee:'15,000',courseRating:'*****'},
        {courseName:'Apex Development',courseDuration:'30 Days',courseFee:'20,000',courseRating:'*****'},
        {courseName:'Disgin pattern',courseDuration:'25 Days',courseFee:'5,000',courseRating:'*****'}
    ];
}