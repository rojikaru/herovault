import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent {
  @Input() hero!: Hero;
}
