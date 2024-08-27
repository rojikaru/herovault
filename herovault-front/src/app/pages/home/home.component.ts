import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

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
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public isAuthenticated = false;

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

  constructor(
    public auth: AuthService,
  ) {
    this.auth.isAuthenticated$.subscribe(newAuthStatus => this.isAuthenticated = newAuthStatus);
  }
}
