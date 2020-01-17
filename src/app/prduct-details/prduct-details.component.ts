import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prduct-details',
  templateUrl: './prduct-details.component.html',
  styleUrls: ['./prduct-details.component.scss']
})
export class PrductDetailsComponent implements OnInit {

  _name: string;

 // @Input() greetMessage = 'I am Product-Details Child';

  constructor() { }

  @Input()
  set Name(name: string){
    if(name){
    this._name = "The product " +name +" is fresh product from our shop"
  }
    console.log(this._name);
  }

  get Name(){
    return this._name;
  }

  ngOnInit() {
  }

}
