import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  onSearchKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.router.navigate(['/category-page']);
    }
  }

  goToCategoryPage() {
    this.router.navigate(['/category-page']);
  }
}
