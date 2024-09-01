import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { merge, Subscription } from 'rxjs';
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
export class OutlinedFieldComponent implements OnInit, OnDestroy {
  @Input() field!: FormControl

  @Input() label!: string
  @Input() placeholder: string = ''
  @Input() type: string = 'text'
  @Input() required: boolean = true

  @Input() icon?: string

  @Input() errorDictionary?: Record<string, string>
  @Input() validators?: ValidatorFn[]

  errorMessage = signal('');
  errorSubscription!: Subscription;

  ngOnInit(): void {
    this.errorSubscription = merge(
      this.field.statusChanges,
      this.field.valueChanges
    ).subscribe(() => this.updateErrorMessage());
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  updateErrorMessage() {
    const errors = this.field.errors;
    if (!errors) {
      this.errorMessage.set('');
      return;
    }

    if (!this.errorDictionary) {
      this.errorMessage.set(Object.keys(errors)[0]);
      return;
    }

    const errorKey = Object.keys(errors)[0];
    this.errorMessage.set(this.errorDictionary[errorKey]);
  }
}
