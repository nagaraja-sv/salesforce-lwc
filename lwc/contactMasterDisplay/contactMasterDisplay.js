import { LightningElement, wire } from 'lwc';
import getAllAcounts from '@salesforce/apex/ContactManger.getAllAccounts';
import fetchAllcontacts from '@salesforce/apex/ContactManger.fetchAllcontacts';
import {NavigationMixin} from 'lightning/navigation';
export default class ContactMasterDisplay extends NavigationMixin(LightningElement) {
    selectedAccount;
    accountOptions = [];
    errorDetails;

    @wire(getAllAcounts)
    accountProcess({error,data}){
        if (data) {
            for(var i=0;i<data.length;i++){
                    this.accountOptions = [...this.accountOptions,{value:data[i].id,label:data[i].Name}];


            }            
        }
        else if (error) {
            this.errorDetails = error;
            
        }

    }



    @wire(fetchAllcontacts)
    contacts;
    contactId;
    navRecHome(event){
        this.contactId = event.target.value;
        alert(this.contactId);
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId: this.contactId,
                objectApiName:'Contact',
                actionName:'view'
            }
            

        });
    }
}