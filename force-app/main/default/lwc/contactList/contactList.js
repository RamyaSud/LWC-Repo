import { LightningElement,wire,track} from 'lwc';
import reduceErrors from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
const COLUMNS = [
    {label: 'First Name', fieldName: FIRST_NAME.fieldApiName, type:'text'},
    {label: 'Last Name', fieldName: LAST_NAME.fieldApiName, type:'text'},
    {label: 'Email', fieldName: EMAIL.fieldApiName, type:'text'}
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;
    results;
    //error
    get errors(){
       // console.log(this.results.error);
        return (this.results.error) ? reduceErrors(this.results.error) : [];
    }
    @wire(getContacts)
    results;
    /*wiredContactData({error,data}){
       if(data){
            this.results = data;
            window.console.log('contact',data);
            this.error = undefined;
        }
        else if( error){
            this.error = error;
            //console.log(error.message);
            this.results = undefined;
        }
    }*/
   
    }
   
    
