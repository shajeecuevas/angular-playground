import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { NewsComponent } from './news.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent }
];