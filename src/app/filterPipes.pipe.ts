import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name : 'filterData'})

export class FilterPipesComponent implements PipeTransform{

    transform(value: any[], searchText : string): any[] {

        if(!value || !searchText) return value;
        searchText = searchText.toLowerCase();

        return value.filter(v => {
             return v.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        });


    }
}
