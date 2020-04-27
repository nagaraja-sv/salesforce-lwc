import { LightningElement, api } from 'lwc';

export default class LifeCycleHookExample extends LightningElement {

    @api message = 'welcome!';
    constructor(){
        super();
        this.mesage = this.message + 'to component lifecycle';
        console.log('Executing Constructor');
    }
    connectedCallback(){
        console.log('Executing connected Callback');
    }
    disconnectedCallback(){
        console.log('Executing disconnected Callback');
    }
    renderedCallback(){
        console.log('Executing rendered Callback');
    }
    errorCallback(error,stack){
        console.log('Executing rendered Callback'+error);
    }
}