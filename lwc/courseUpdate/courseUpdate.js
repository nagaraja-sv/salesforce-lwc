import { LightningElement,api } from 'lwc';

export default class CourseUpdate extends LightningElement {

    @api courseName= 'Lightning Web Component';
    @api courseFee = '10000';

    @api
    updateFee(){
        this.courseFee = parseFloat(this.courseFee)* 2;
    }
    @api
    changeCourseFee(event){
        this.courseFee = event.target.value;
    }
}