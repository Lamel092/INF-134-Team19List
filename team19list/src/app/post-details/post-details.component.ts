import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/category-page']);
  }
}
