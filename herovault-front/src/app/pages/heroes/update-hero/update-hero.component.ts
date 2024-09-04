import { Component } from '@angular/core';
import { RequestService } from '../../../requests/request.service';
import { FormGroup } from '@angular/forms';
import { HeroFormComponent } from '../../../components/hero-form/hero-form.component';

@Component({
  selector: 'app-update-hero',
  standalone: true,
  imports: [HeroFormComponent],
  templateUrl: './update-hero.component.html',
})
export class UpdateHeroComponent {
  constructor(
    private requestService: RequestService,
  ) { }

  // TODO: Implement onSubmit & check requestService.mutate
  onSubmit(form: FormGroup): void {
    console.warn(form.value);
  }
}
