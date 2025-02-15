import { LightningElement,api,track } from 'lwc';

export default class DecoratorsExample extends LightningElement {
    title = "Welcome to baby color code";
     message = "";
    /*@track colorCode = 
        [
            {
                color: "Pink",
                code: 1
            },
            {
                color: "Blue",
                code: 2
            }
          
     ];*/
     @api displayCode(colorCode){
                
        if ( colorCode=== "1")
            this.message = "Hey its Pink";
          else if(colorCode=== "2")
          this.message = "Hey its blue";
          else
          this.message = "No pink or blue"; 
    }
}