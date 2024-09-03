import { Component, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OutlinedFieldComponent }
  from '../form/outlined-field/outlined-field.component';
import { OutlinedSelectComponent }
  from '../form/outlined-select/outlined-select.component';
import {
  defaultHeroChangeInitValues,
  ChangeHero
} from '../../models/hero';
import { OutlinedChiplistComponent }
  from '../form/outlined-chiplist/outlined-chiplist.component';
import { OutlinedMultilineFieldComponent }
  from '../form/outlined-multiline-field/outlined-multiline-field.component';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [
    OutlinedFieldComponent,
    OutlinedSelectComponent,
    OutlinedChiplistComponent,
    OutlinedMultilineFieldComponent,
    MatFormFieldModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './hero-form.component.html',
})
export class HeroFormComponent {
  @Input() onSubmit!: (f: FormGroup) => void;
  @Input() initialValues: ChangeHero = defaultHeroChangeInitValues
  @Input() submitText: string = 'Submit';

  readonly races = [
    'Human',
    'Elf',
    'Dwarf',
    'Halfling',
    'Gnome',
    'Half-Elf',
    'Half-Orc',
    'Dragonborn',
    'Tiefling'
  ];
  readonly alignments = [
    'Lawful Good',
    'Neutral Good',
    'Chaotic Good',
    'Lawful Neutral',
    'True Neutral',
    'Chaotic Neutral',
    'Lawful Evil',
    'Neutral Evil',
    'Chaotic Evil'
  ];

  heroForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const powerstatsValidators = [Validators.required, Validators.min(0), Validators.max(20)]

    this.heroForm = this.fb.group({
      name: this.fb.control(
        this.initialValues.name,
        [Validators.required]
      ),
      description: this.fb.control(
        this.initialValues.description,
        [Validators.required]
      ),
      // TODO: Change to array of files
      images: this.fb.array<string>(
        this.initialValues.images,
        [Validators.minLength(1)]
      ),
      race: this.fb.control(
        this.initialValues.race,
        [Validators.required]
      ),
      alignment: this.fb.control(
        this.initialValues.alignment,
        [Validators.required]
      ),
      class: this.fb.array(
        this.initialValues.class,
        [Validators.required]
      ),
      background: this.fb.control(this.initialValues.background),
      abilities: this.fb.array(this.initialValues.abilities),
      powerstats: this.fb.group({
        strength: [
          this.initialValues.powerstats.strength,
          powerstatsValidators
        ],
        dexterity: [
          this.initialValues.powerstats.dexterity,
          powerstatsValidators
        ],
        constitution: [
          this.initialValues.powerstats.constitution,
          powerstatsValidators
        ],
        intelligence: [
          this.initialValues.powerstats.intelligence,
          powerstatsValidators
        ],
        wisdom: [
          this.initialValues.powerstats.wisdom,
          powerstatsValidators
        ],
        charisma: [
          this.initialValues.powerstats.charisma,
          powerstatsValidators
        ],
      }),
      equipment: this.fb.array(this.initialValues.equipment),
      remarks: this.fb.array<string>(this.initialValues.remarks),
    });
  }

  array(name: string): FormArray {
    return this.heroForm.get(name) as FormArray;
  }

  control(name: string): FormControl;
  control(control: AbstractControl): FormControl;
  control(input: string | AbstractControl): FormControl {
    return (typeof input === 'string'
      ? this.heroForm.get(input)
      : input) as FormControl
  }
}
