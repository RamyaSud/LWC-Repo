import { LightningElement,wire} from 'lwc';
import { subscribe, MessageContext,unsubscribe } from 'lightning/messageService';
import COUNTER_CHANNEL from '@salesforce/messageChannel/Counter__c';


export default class SubComp extends LightningElement {
    @wire(MessageContext)
    msgContext
    volCount = 0
    subscription =''
    connectedCallback(){
        this.subscription = subscribe(this.msgContext,COUNTER_CHANNEL,(message)=>{this.handleMessage(message)})  //(param) =>{}
    }
    handleMessage(msg){
        if(msg.Operator === 'increase'){   
            this.volCount++
        }
        else if(msg.Operator === 'decrease')
            if(this.volCount !== 0)
                  this.volCount--
    }
    disconnectedCallback(){
        unsubscribe(this.subscription)
    }
}