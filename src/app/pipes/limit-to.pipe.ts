import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
  transform(value: any, limit?: any): any {
    return limit ? value.substring(0, limit) : value;
  }
}
