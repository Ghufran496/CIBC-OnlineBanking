import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css',
})
export class MainDashboardComponent {
  constructor(private router: Router) {}

  onSignOff(): void {
    this.router.navigate(['/']);
  }
}
