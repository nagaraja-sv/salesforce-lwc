import { LightningElement,api } from 'lwc';

export default class ParentCourseUpdate extends LightningElement {

    @api pCourseName = 'Salesforce Aura Components'
    @api pCourseFee = '5900'

    parentUpdateFee(){
        this.template.querySelector('c-course-update').updateFee();
    }

    parentChangeCourseFee(){
        this.template.querySelector('c-course-update').changeCourseFee(event);
    }
}