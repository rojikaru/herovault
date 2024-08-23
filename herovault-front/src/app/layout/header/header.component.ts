import { Component } from '@angular/core';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AuthButtonComponent } from '../../components/auth-button/auth-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AuthButtonComponent,
    RouterModule,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent { }
