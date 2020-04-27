import { LightningElement } from 'lwc';

export default class AllCourseForEach extends LightningElement {


        allCourseDetails = [
            {courseName : 'LWC', courseDuration:'20Days'},
            {courseName : 'Integration', courseDuration:'15Days'},
            {courseName : 'Aura Component', courseDuration:'20Days'},
            {courseName : 'Design Pattern', courseDuration:'30Days'}
        ];
}