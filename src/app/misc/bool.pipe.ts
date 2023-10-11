import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  transform(bool: boolean, locale: string = "en"): string {

    if(locale === 'fr')
      return bool ? "YES" : "NO";
    return bool ? "OUI" : "NON";
  }

}
