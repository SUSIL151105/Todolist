import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(tasks: string[], searchText: string): string[] {
    if (!tasks) return [];
    if (!searchText) return tasks;
    searchText = searchText.toLowerCase();
    return tasks.filter(task => task.toLowerCase().includes(searchText));
  }
}
