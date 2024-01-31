import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCapitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, shouldAddPoint: boolean = false): unknown {
    const otherString = value.slice(1)
    const firstValue = value[0].toLocaleUpperCase()

    const resultString = firstValue + otherString;
    if (shouldAddPoint) {
      return resultString + '.'
    }

    return resultString
  }

}
