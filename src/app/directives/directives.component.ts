import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  /*
  *ngIf - structural
  *ngFor - structural
  ngclass- attribute
  ngstyle- attribute
   
  Life cycle hooks

  component directives--
  custom structural directives-- 
  custom attribute directives-- ng g d changeColor
                             Creating the input text to credi card input - 9999934343 cc text box 16 digit
                              google map - change color of area where population is more 100k
                                */

  title = 'Directives';
  products: IProduct[] =[];
  showImage= false;
  imageUrl=50;
  imageMargin=2;

  height =20;
  width = 100;

   /*  First Class-
  message ="Hello World";
  Product ={  Id:'1', Title: "Pen",  Price: 300 }
  sayHello(){
    this.height = this.height +10;
    if(this.height>300){
    } }
*/

  constructor(){
    // If code get 
    //not to use for API calls, service call
    //If not to sure where to use put code in constructor / ngOnit choose ngOnIt
  }

  ngOnInit(){
    // First funct when cponent get initialized
    //api call
    //service call
    // bring data frpm somewhere else
    this.products = this.getProducts();
    console.log(this.products)
  }
  
  ngOnDestroy(){
    //Last component
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

  getProducts(){
    return[
      {
        "productId": 1,
        "productName": 'Apple',
        "description": "This is Apple",
        "imageUrl": "assets/images/apple.jpg",
        "productCode": 25,
        "releaseDate": '23/5/2020',
        "price": 250,
        "starRating": 5

      },

      {
        "productId": 2,
        "productName": 'Grapes',
        "description": "This is grapes",
        "imageUrl": "assets/images/grapes.png",
        "productCode": 11,
        "releaseDate": '23/5/2020',
        "price": 80,
        "starRating": 4

      },
      
      {
        "productId": 3,
        "productName": 'Hammer',
        "description": "This is Hammer",
        "imageUrl": "assets/images/hammer.jpg",
        "productCode": 10,
        "releaseDate": '23/5/2020',
        "price": 56,
        "starRating": 3

      },
      
      {
        "productId": 4,
        "productName": 'KIwi',
        "description": "This is kiwi",
        "imageUrl": "assets/images/kiwi.png",
        "productCode": 24,
        "releaseDate": '23/5/2020',
        "price": 56,
        "starRating": 5

      },

      {
        "productId": 5,
        "productName": 'Pomogran',
        "description": "This is pomogran",
        "imageUrl": "assets/images/pomogran.jpg",
        "productCode": 12,
        "releaseDate": '23/5/2020',
        "price": 120,
        "starRating": 4

      }]
  }
 


  /* 
  //numEng('12345');

  numEng(num: any, custChar: any){
    var string = num.toString(), 
    units, tens, scales, start, end, chunk, chunkLength, words, i,ints,word;

    var and = custChar;
    if(parseInt(string) === 0){
      return 'Zero';
    }

    units = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen'];
    tens = ['', 'twenty', 'thirty','forty','fifty','sixty'];
    scales = ['', 'thousand','million'];

    start = string.length;
    chunk = [];
    while (start>0){
      end = start;
      chunk.push(string.slice(start = Math.max(0, start - 3)), end);
    }

    chunkLength = chunk.length;
    if(chunkLength > scales.length){
      return '';
    }
    words = [];

    for(i = 0; i< chunkLength; i++){
      chunk = parseInt(chunk[i]);

      if(chunk){
        // split the chuunk for ind int
        ints = chunk[i].split('').reverse().map(parseFloat);

        if(ints[1] === 1){
          ints[0] += 10;
        }

        if(word = scales[i]){
          words.push(word);
        }

        if(word = units[ints[0]]){
          words.push(word);
        }
        
        if(word = tens[ints[1]]){
          words.push(word); 
        }

        if(ints[0] || ints[1]){
          //hund
          if(ints[0] || ints[1]){
            if(ints[2] || !i && chunkLength){
              words.push(and);
            }
          }
          console.log(" words ", words);
        }
      }

    }
   console.log(words.reverse().join('')); 
   return words.reverse().join('');
  }
  */

}
