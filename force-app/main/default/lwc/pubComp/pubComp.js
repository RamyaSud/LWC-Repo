import { LightningElement,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import COUNTER_CHANNEL from '@salesforce/messageChannel/Counter__c';

export default class PubComp extends LightningElement {
    @wire(MessageContext)
    msgContext
    payload = ''
    handleIncrease(){
         this.payload ={Operator:'increase'}
        publish(this.msgContext,COUNTER_CHANNEL, this.payload)
    }
    handleDecrease(){
        this.payload ={Operator:'decrease'}
        publish(this.msgContext,COUNTER_CHANNEL, this.payload)
    }
}