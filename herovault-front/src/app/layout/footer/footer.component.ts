import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
