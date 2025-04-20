import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect default route to Home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
