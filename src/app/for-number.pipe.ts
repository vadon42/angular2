import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forNumber'
})
export class ForNumberPipe implements PipeTransform {

  transform(value: number): any {
    return Array(value).fill(0).map((x, i) => i + 1);
  }
}
