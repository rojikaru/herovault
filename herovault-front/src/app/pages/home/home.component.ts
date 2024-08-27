import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  public isAuthenticated = false;
  private authSubscription?: Subscription;

  public features: Feature[] = [
    {
      title: 'Social',
      description: 'Connect with other players and share your characters.'
    },
    {
      title: 'AI-Driven',
      description: 'Get suggestions and tips for your characters and campaigns.'
    },
    {
      title: 'Customizable',
      description: 'Create your own character sheets and campaigns.'
    },
    {
      title: 'Character Sheets',
      description: 'Create and manage your characters with ease.'
    },
    {
      title: 'Campaigns',
      description: 'Organize your characters into campaigns and track their progress.'
    },
    {
      title: 'Extensible',
      description: 'Add custom weapons, abilities and more to your characters.'
    },

    // haha maybe someday
    {
      title: 'Dice Roller',
      description: 'Roll dice and perform calculations with ease.'
    },
    {
      title: 'Combat Tracker',
      description: 'Track initiative and health for your characters.'
    },
  ];

  constructor(private auth: AuthService) { }

  login(): void {
    this.auth.loginWithRedirect();
  }

  ngOnInit(): void {
    this.authSubscription = this.auth
      .isAuthenticated$
      .subscribe(isAuthed => this.isAuthenticated = isAuthed);
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
