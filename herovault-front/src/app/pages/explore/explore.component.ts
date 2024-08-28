import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../requests/request.service';
import { gql } from 'apollo-angular';
import { PartialHero } from '../../models/hero';
import { ApolloError } from '@apollo/client/errors';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeroListComponent } from '../../components/hero-list/hero-list.component';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';
import { MatCardModule } from '@angular/material/card';

const heroesQuery = gql`
  query {
    heroes {
      id
      name
      description
      images
      user {
        name
        picture
      }
    }
  }
`

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    MatProgressSpinnerModule, 
    HeroListComponent, 
    HeroCardComponent,
    MatCardModule,
  ],
  templateUrl: './explore.component.html',
})
export class ExploreComponent implements OnInit {
  public heroes?: PartialHero[]
  public loading = true;
  public error: Error | ApolloError | ApolloError[] | null = null;

  constructor(
    private requestService: RequestService,
  ) { }

  ngOnInit(): void {
      this.requestService
        .query<{
          heroes: PartialHero[]
        }>(heroesQuery)
        .then(r => {
          this.heroes = r.heroes
          this.loading = false
        })
        .catch(e => {
          console.error(e)
          this.loading = false
          this.error = e
        })
  }
}
