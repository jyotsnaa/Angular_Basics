import { Component, OnInit, EventEmitter, Input, OnChanges, Output, SimpleChange } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
 // changeDetection
})
export class OrderComponent implements OnInit, OnChanges  {

  title = "Parent Componet Order";
  //data =100;
  @Input() data: number;
  @Output() showDataEvent = new EventEmitter();  //ngzone

  orderCity ="delhi";

  showSupplyName(){
    alert("Hi from child Order");
    console.log('Hi from child Order');
  }

  constructor() { }
  //ngOnChanges(changes: SimpleChanges): void {
    //throw new Error("Method not implemented.");


    ngOnInit(): void{
      console.log('On Init');
    }
  
    ngOnChanges(changes: {[propKey: string]: SimpleChange}): void{
      for(let p in changes){
        let c = changes[p];
        console.log(c);
        let from = JSON.stringify(c.previousValue);
        let to = JSON.stringify(c.currentValue);
        console.log(` ${p} changed from ${from} to ${to}`)
      }
    }
  
    showData(){
      console.log("ShowData: "+this.data)
      this.showDataEvent.emit(this.data);
    }

  }

  




