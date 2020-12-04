import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'skills', component: SkillsComponent, data: { animation: 'Skills' } },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'Projects' },
  },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
