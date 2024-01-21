import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  static sortObjectsByProperty(objArray: [], objProperty: string): object[] {
    return objArray.map((obj) => obj[objProperty]).sort((a, b) => a - b);
  }

  static sortStringArray(arr: string[], isDescending = false): string[] {
    return isDescending ? arr.sort().reverse() : arr.sort();
  }
}
