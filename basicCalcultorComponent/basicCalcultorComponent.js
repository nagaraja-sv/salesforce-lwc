import { LightningElement } from 'lwc';

export default class BasicCalcultorComponent extends LightningElement {

firstInput;
secondInput;
totalValue;
showResult = false;

firstInputChange(event){
this.firstInput = event.target.value;

}
secondInputChange(event){
this.secondInput = event.target.value;
}

add(event){
    this.totalValue = Number(this.firstInput) + Number(this.secondInput);
    this.showResult = true;  
}
subtract(event){
    this.totalValue = Number(this.firstInput) - Number(this.secondInput);  
    this.showResult = true;   
    }  
multiplication(event){
    this.totalValue = Number(this.firstInput) * Number(this.secondInput); 
    this.showResult = true;    
    }
division(event){
    this.totalValue = Number(this.firstInput) / Number(this.secondInput); 
    this.showResult = true;    
    }
}