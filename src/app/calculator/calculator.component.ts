import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  subText = '';
  mainText = '';
  operand1: number;
  operand2: number;
  operator = '';
  calculationString ='';

  answered = false;
  operatorSet = false;

  pressKey(key: string){
     if(key === '/' || key ==='*' || key === '-' || key === '+'){
       const lastKey = this.mainText[this.mainText.length - 1];     
       if(lastKey === '/' || lastKey ==='*' || lastKey === '-' || lastKey === '+'){
        this.operatorSet = true;
       }
       if((this.operatorSet) || (this.mainText === '')){
         return;
       }
        this.operand1 = parseFloat(this.mainText);
        this.operator = key;
        this.operatorSet = true;
      }
      if(this.mainText.length === 10){
         return;
      }
      this.mainText +=key;
    }

    getAnswer (){
         this.calculationString = this.mainText;
         this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);

         if(this.operator === '/'){
           this.subText = this.mainText;
           this.mainText = (this.operand1 / this.operand2).toString();
           this.subText = this.calculationString;

           if( this.mainText.length >9){
             this.mainText = this.mainText.substr(0, 9);
           }
         }else if( this,this.operator === 'x'){
           this.subText = this.mainText;
           this.mainText = (this.operand1 * this.operand2).toString();
           this.subText = this.calculationString;
           if(this.mainText.length > 9){
             this.mainText = 'ERROR';
             this.subText = 'Range Exceeded';
           }
         }else if( this.operator === '-'){
           this.subText = this.mainText;
           this.mainText = (this.operand1 - this.operand2).toString();
           this.subText = this.calculationString;
         }else if( this.operator ='+'){
           this.subText = this.mainText;
           this.mainText = (this.operand1 + this.operand2).toString();
           this.subText = this.calculationString;
           if(this.mainText.length >9){
             this.mainText = 'Error';
             this.subText = 'Raange Exceeded'
           } 
         } else{
           this.subText = 'ERROR: Invalid Operator';
         }
         this.answered = true;
    }
 

  constructor() { }

  ngOnInit() {
  }

}
