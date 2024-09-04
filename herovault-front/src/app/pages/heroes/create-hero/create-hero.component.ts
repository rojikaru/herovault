import { Component } from '@angular/core';
import { HeroFormComponent } from '../../../components/hero-form/hero-form.component';
import { FormGroup } from '@angular/forms';
import { RequestService } from '../../../requests/request.service';

@Component({
  selector: 'app-create-hero',
  standalone: true,
  imports: [HeroFormComponent],
  templateUrl: './create-hero.component.html',
})
export class CreateHeroComponent {
  constructor(
    private requestService: RequestService,
  ) { }

  // TODO: Implement onSubmit & check requestService.mutate
  onSubmit(form: FormGroup): void {
    console.warn(form.value);
  }
}
