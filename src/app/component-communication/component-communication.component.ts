import { Component, EventEmitter, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})
export class ComponentCommunicationComponent implements OnInit, AfterViewInit{

  geekData= 1000;
  showDataEvent = new EventEmitter();  //ng:zone

  @ViewChild(OrderComponent, {static: false}) orderView: OrderComponent;

   // {read:true}- conent projection
  
  changeData(){
    this.geekData = this.geekData+10;
  }

  constructor() { }

  ngAfterViewInit(){
    // only access in  @ViewChild(OrderComponent) in ngAfterViewInit
    console.log("From parent app afterView"+this.orderView);
    alert("From parent app afterView");
  }

  ngOnInit() {
    console.log(this.orderView)
  }

  showDataFromChild(geekData){
    console.log(geekData);
  }

}
