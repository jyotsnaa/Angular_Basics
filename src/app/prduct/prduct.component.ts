import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prduct',
  templateUrl: './prduct.component.html',
  styleUrls: ['./prduct.component.scss']
})
export class PrductComponent implements OnInit {

  titile = "Child component product"
  loadComponent = false;
  product_name='';

  searchText : string;

  getCurrentUser(name){
    this.loadComponent = true;
    this.product_name = name;
    console.log("product name",name);
  }

  product: any = [
    {name: 'Apple', id: 0, price: 100},
    {name: 'Orange', id: 1, price: 40},
    {name: 'Pinapple', id: 2, price: 50},
    {name: 'Mango', id: 3, price: 60},
    {name: 'Watermelon', id: 4, price: 100},
    {name: 'Pear', id: 5, price: 300},
    {name: 'Cheery', id: 6, price: 200},
    {name: 'Strawberry', id: 7, price: 60},
    {name: 'Nectarine', id: 8, price: 100},
    {name: 'Grape', id: 9, price: 40},
    {name: 'Blueberry', id: 10, price: 50},
    {name: 'Pomegranate', id: 11, price: 60},
    {name: 'Banana', id: 12, price: 40},
    {name: 'Raspberry', id: 13, price: 50},
    {name: 'Jackfruit', id: 14, price: 60},
    {name: 'NectCarambola(U.K) – starfruit (U.S)', id: 15, price: 100}
  ];

  constructor(){
    console.log(this.product);
  }

  ngOnInit() {
  }

}
