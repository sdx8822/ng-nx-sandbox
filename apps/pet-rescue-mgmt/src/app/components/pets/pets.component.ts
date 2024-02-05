import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetService } from '../../shared/services';

import { PetModel } from '@ng-nx-sandbox/shared-libs';

import { 
  BadgeComponent,
  ButtonComponent,
  TextInputComponent 
} from '@ng-nx-sandbox/sandbox-ui';

@Component({
  selector: 'ng-nx-sandbox-pets',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ButtonComponent, TextInputComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss',
})
export class PetsComponent implements OnInit  {
  selectedPet?: PetModel;
  pets: PetModel[] = [];

  isLoading: boolean = false;

  constructor(private _petService: PetService) {}

  ngOnInit(): void {
      this._getPets();
  }

  addPet(): void {
    this._petService.addPet(new PetModel({
      name: 'Zelda',
      breed: 'Domestic Shorthair',
      description: 'Cuddly bear',
      dob: 'April',
      status: {
        medicalRecords: [],
        diet: [],
        illness: [],
        specialCareNote: '',
        isFostered: false,
        isAdopted: false
      }
    })).subscribe((pet) => this.selectedPet = pet);
  }

  private _getPets(): void {
    this.isLoading = true;

    this._petService.getPets()
      .subscribe((pets) => {
        this.pets = pets;

        console.log(pets);
      })
      .add(() => this.isLoading = false);
  }
}
