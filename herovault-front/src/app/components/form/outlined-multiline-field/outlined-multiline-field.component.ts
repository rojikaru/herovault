import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { OutlinedFieldComponent } from '../outlined-field/outlined-field.component';

@Component({
  selector: 'app-outlined-multiline-field',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatIconModule, 
    MatButtonModule,
    OutlinedFieldComponent,
  ],
  templateUrl: './outlined-multiline-field.component.html',
})
export class OutlinedMultilineFieldComponent {
  @Input() items!: FormArray;

  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() btnHint!: string;
  @Input() icon?: string;

  constructor(
    private fb: FormBuilder
  ) { }

  control(control: AbstractControl): FormControl {
    return control as FormControl;
  }

  addItem(): void {
    this.items.push(this.fb.control(''));
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }
}
