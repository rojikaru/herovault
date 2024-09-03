import { booleanAttribute, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-outlined-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './outlined-select.component.html',
})
export class OutlinedSelectComponent {
  @Input() field!: FormControl;

  @Input() label!: string;
  @Input({ transform: booleanAttribute }) required: boolean = true;

  @Input() options!: string[]

  constructor() { }
}
