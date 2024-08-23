import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroCardComponent } from '../hero-card/hero-card.component';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [HeroCardComponent],
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  breakpoint: number = 6;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event: { target: { innerWidth: number } }) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
