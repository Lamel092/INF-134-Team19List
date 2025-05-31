import { Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';

export const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent },
  { path: '', redirectTo: 'create-post', pathMatch: 'full' }
];