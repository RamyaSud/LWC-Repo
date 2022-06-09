import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/FirstLwcDemoclass.getContacts';
import getAccountData from '@salesforce/apex/FirstLwcDemoclass.getAccountData';
export default class FirstLwcApp extends LightningElement {
    greeting = "Welcome";
    inputTxt = "";
    result;
    error;
    // err, data are the parameter name it is user defined names
    //@wire is like contructor in class, its automatically called when component is created
    
   @wire(getContacts)
    wiredContactData({error,data}){
        if(data){
            this.result = data;
            window.console.log('contact',data);
            this.error = undefined;
        }
        else if( error){
            this.error = error;
            window.console.log('Error',error);
            this.result = undefined;
        }
    }
    handleChange(event){
        this.inputTxt = event.target.value;
       // window.console.log('event.target',event.target);
    }
    
        //err,data are parameter name , it may be any names(user defined)
        //impairative method - its like other method in class- it will be called whenever we invoke it (ex-button click etc)
    handleClick(){
        //alert('Button clicked');
         getAccountData()
        .then(data =>{
            this.result = data;
            this.error = undefined;
        })
        .catch(error =>{
            this.error = error;
            this.result = undefined;
        })
    }
}