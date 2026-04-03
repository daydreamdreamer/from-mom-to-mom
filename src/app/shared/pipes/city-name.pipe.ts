import { Pipe, PipeTransform } from '@angular/core';
import { CITIES } from '../data/cities.data';

@Pipe({
  name: 'cityName'
})
export class CityNamePipe implements PipeTransform {

  transform(cityId: number | null | undefined): string {
    if (cityId == null) return '';

    return CITIES.find(c => c.id === cityId)?.name ?? '';
  }
}
