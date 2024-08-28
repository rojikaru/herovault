import { Component, Input } from '@angular/core';
import { HeroCardComponent } from '../hero-card/hero-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PartialHero } from '../../models/hero';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [HeroCardComponent, MatGridListModule],
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent {
  @Input() heroes!: PartialHero[];
}
