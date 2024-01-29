import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { PetModel, IPetModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  readonly BASE_URL = 'http://localhost:3333/api/';

  constructor(private _http: HttpClient) {
  }

  getPets(): Observable<PetModel[]> {
    return this._http.get<PetModel[]>(this.BASE_URL)
      .pipe(map((pets: IPetModel[]) => pets.map((pet: IPetModel) => new PetModel(pet))));
  }

  addPet(pet: PetModel): Observable<PetModel> {
    return this._http.post<PetModel>(this.BASE_URL, pet)
      .pipe(map((pet: IPetModel) => new PetModel(pet)));
  }
}
