import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
  // A pure pipe is a pipe that is run when a pure change is detected.
  // A pure change is a change to a primitive JavaScript input value like strings,
  // numbers, booleans, symbols or an object reference change.

  // Impure pipes are pipes that can detect changes within objects.
  // Changes within objects include things like changing array entries or object properties.

  /* IN SIMPLER WORDS
  A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe.
  An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes.
   */
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const results: any[] = [];

    for (const item of value) {

      if (item[propName] === filterString) {
        results.push(item);
      }
    }

    return results;
  }
}
