import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import COMPANY from '@salesforce/schema/Lead.Company';
import ANNUAL_REVENUE from '@salesforce/schema/Lead.AnnualRevenue';
 const FIELDS = [
        COMPANY,
        ANNUAL_REVENUE       
    ];

export default class SecondLwc extends LightningElement {
   
    @api recordId
    companyName;
    annualRev;
    
    errorMsg = '';
    @wire (getRecord, {recordId : '$recordId', fields  : FIELDS})
    getResults({error,data}){
        if(data){
            this.companyName = data.fields.Company.value;
            this.annualRev = data.fields.AnnualRevenue.value;
            this.errorMsg = undefined;
        }
        else if(error){
            this.errorMsg = error;
           // this.results = undefined;
        }
    }
}