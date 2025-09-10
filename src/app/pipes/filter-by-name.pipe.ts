import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: false
})
export class FilterByNamePipe implements PipeTransform {
  transform(array: any[], searchTerm: string): any[] {
    if (!array || !searchTerm) return array;
    return array.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
