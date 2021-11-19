import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousand'
})
export class ThousandPipe implements PipeTransform {

  transform(value: any): any{
    value=Number(value);
    return value/1000+'K'
  }

}
