import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-outlined-chiplist',
  standalone: true,
  imports: [MatFormFieldModule, MatChipsModule, MatIconModule],
  templateUrl: './outlined-chiplist.component.html',
})
export class OutlinedChiplistComponent implements OnInit {
  @Input() items!: FormArray
  @Input() label!: string
  @Input() placeholder!: string
  @Input() addOnBlur: boolean = true
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SEMICOLON] as const

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.items) return
    this.items = this.fb.array([])
  }

  addItem(event: MatChipInputEvent): void {
    const value = event.value.trim()
    if (!value) return
    this.items.push(this.fb.control(value))
    event.chipInput!.clear()
  }

  removeItem(index: number): void {
    this.items.removeAt(index)
  }

  editItem(index: number, event: MatChipEditedEvent): void {
    const value = event.value.trim()
    if (!value) return
    this.items.at(index).setValue(value)
  }
}
