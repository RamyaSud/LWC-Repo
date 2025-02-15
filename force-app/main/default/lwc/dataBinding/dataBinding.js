import { LightningElement,track } from 'lwc';

export default class DataBinding extends LightningElement {
     name = 'Ramya'
    title = 'Salesforce Developer'
    handleChange(event){
        this.title= event.target.value
    }
}