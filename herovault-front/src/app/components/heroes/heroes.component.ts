import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  breakpoint: number = 6;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event: { target: { innerWidth: number } }) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
