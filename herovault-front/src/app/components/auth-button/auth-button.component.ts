import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './auth-button.component.html',
})
export class AuthButtonComponent implements OnInit, OnDestroy {
  private authSubscription?: Subscription;
  public isAuthenticated = false;

  private loadingSubscription?: Subscription;
  public isLoading = true;

  // TODO: Implement user profiles with @username routing
  public personalPage: string = '/me';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private auth: AuthService
  ) { }

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({
      logoutParams: { returnTo: this.document.location.origin },
    });
  }

  ngOnInit(): void {
    this.loadingSubscription = this.auth
    .isLoading$
    .subscribe(loading => this.isLoading = loading);

    this.authSubscription = this.auth
      .isAuthenticated$
      .subscribe(isAuthed => this.isAuthenticated = isAuthed);
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
    this.loadingSubscription?.unsubscribe();
  }
}
