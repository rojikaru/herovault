import { Component, Input, signal } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-outlined-field',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './outlined-field.component.html',
})
export class OutlinedFieldComponent {
  @Input() label!: string
  @Input() placeholder: string = ''
  @Input() type: string = 'text'
  @Input() required: boolean = true
  @Input() disabled: boolean = false
  @Input() icon?: string
  @Input() errorDictionary: Record<string, string> = {}
  @Input() validators?: ValidatorFn[]

  errorMessage = signal('');
  readonly field = new FormControl<string>('', this.validators)

  constructor() {
    merge(this.field.statusChanges, this.field.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    const errors = this.field.errors;
    if (!errors) {
      this.errorMessage.set('');
      return;
    }

    const errorKey = Object.keys(errors)[0];
    this.errorMessage.set(this.errorDictionary[errorKey]);
  }
}
