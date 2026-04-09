import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cookingTime'
})
export class CookingTimePipe implements PipeTransform {

  transform(totalMinutes: number | null | undefined): string {
    if(totalMinutes == null || isNaN(totalMinutes)){
      return "";
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    if(hours > 0){
      return `${formattedHours} ч ${formattedMinutes} мин`
    }

    return `${formattedMinutes} мин`
  }

}
