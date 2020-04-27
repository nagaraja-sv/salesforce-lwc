import { LightningElement } from 'lwc';

import myImage from '@salesforce/resourceUrl/myImage';
import myfiles	from '@salesforce/resourceUrl/myfiles'

export default class AccessStaticResource extends LightningElement {

    my = myImage;
    zip = myfiles+'/myfiles/Image.png';
}