import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: false
})
export class SortByPricePipe implements PipeTransform {
  transform(array: any[], order: 'asc' | 'desc' = 'asc'): any[] {
    if (!array) return [];
    return array.slice().sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }
}
