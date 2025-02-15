import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import PHONE from '@salesforce/schema/Contact.Phone';

export default class LighRecodForm extends NavigationMixin(LightningElement) {
    fields = [LAST_NAME,PHONE];
    navToConListPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            }
        })
    }
}