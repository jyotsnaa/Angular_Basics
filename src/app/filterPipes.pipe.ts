import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({name : 'filterData'})

export class FilterPipesComponent implements PipeTransform{

    transform(value: IProduct[], searchText : string): unknown {

        //any[]  - if get some error any will not handle that
        // Unknown will handle the error

        if(!value || !searchText) 
        return value;
       // searchText = searchText.toLowerCase();

        return value.filter(item => 

            item.productName.toLowerCase().indexOf(searchText.toLowerCase()) > -1)

      //v=> {  v.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 });
      


    }
}
