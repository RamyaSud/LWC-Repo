import { LightningElement,track } from 'lwc';

export default class DecoratorsEgParent extends LightningElement {
     colorCode = "";
    handleChange(event){
       this.colorCode = event.target.value;
        //console.log(this.colorCode);
    }
     
    handleClick(){
        
        this.template.querySelector('c-decorators-example').displayCode(this.colorCode);
    }

}