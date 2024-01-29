import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PetsComponent } from './components/pets/pets.component';

@Component({
  standalone: true,
  imports: [PetsComponent, RouterModule],
  selector: 'ng-nx-sandbox-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pet-rescue-mgmt';
}
