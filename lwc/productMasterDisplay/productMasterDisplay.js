import { LightningElement,wire } from 'lwc';
import FindAllProduct from '@salesforce/apex/ProductManger.FindAllProduct';
export default class ProductMasterDisplay extends LightningElement {
allProducts;
errorDetails;
@wire(FindAllProduct)
processAllProduct({error,data}){
    if (data) {
        this.allProducts = data; 
        alert(this.allProducts)
    } else if(error){
        this.errorDetails = error;
    }

}
}