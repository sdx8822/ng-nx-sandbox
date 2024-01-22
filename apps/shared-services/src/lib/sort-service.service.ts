import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  static sortStringArray(arr: string[], isDescending = false): string[] {
    return isDescending ? arr.sort().reverse() : arr.sort();
  }
}
