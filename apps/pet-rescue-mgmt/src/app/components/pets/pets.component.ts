import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class PetsComponent  {

  constructor() {}

  setItemToSessionStorage() {
    sessionStorage.setItem('uid', '123');
  }
}
