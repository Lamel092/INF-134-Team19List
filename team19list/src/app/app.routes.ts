import { Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostDetailsComponent } from './post-details/post-details.component';

export const routes: Routes = [
  { path: 'category-page', component: CategoryPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'post-details', component: PostDetailsComponent },
];
