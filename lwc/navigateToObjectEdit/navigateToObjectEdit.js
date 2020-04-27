import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToObjectEdit extends NavigationMixin(LightningElement) {
    navigateToAccountEdit(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0010w00000AB2ngAAD',
                objectApiName:'Account',
                actionName:'edit'
            }

        });
    }
    navigateToAccountView(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0010w00000AB2ngAAD',
                objectApiName:'Account',
                actionName:'view'
            }
            
        });

    }
}