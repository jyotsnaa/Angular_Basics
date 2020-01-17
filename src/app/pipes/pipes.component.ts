import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  productName = "Laptops";
  productPrice = '1000';

  names = [];

  constructor() { 
    this.names = this.getNames();
  }

  getNames(){
    return [
      {name : "Jyotsna ANAND"},
      {name : "Kunal gupta"},
      {name : "kannu priya"}
    ]
  }

  ngOnInit() {
  }

}
