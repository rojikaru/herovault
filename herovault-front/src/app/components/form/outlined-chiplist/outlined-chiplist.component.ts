import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-outlined-chiplist',
  standalone: true,
  imports: [MatFormFieldModule, MatChipsModule],
  templateUrl: './outlined-chiplist.component.html',
})
export class OutlinedChiplistComponent {
  constructor() { }
}
