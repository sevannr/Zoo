import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

@Injectable()

export class SearchPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === undefined || term === '') {
      return items;
    }
    
    term =  term.trim();

    return items.filter( (item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
