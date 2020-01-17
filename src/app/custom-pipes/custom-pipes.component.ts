import { Pipe, PipeTransform } from '@angular/core';

/*@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
}) */
@Pipe({name: 'customPipesComponent' })
export class CustomPipesComponent implements PipeTransform {

      transform(value: string, args: string[]): any{
        if(!value){
          return value;
        }
        return value.replace('/\w\S*/g', function (str) {
            return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        });
  }

}
