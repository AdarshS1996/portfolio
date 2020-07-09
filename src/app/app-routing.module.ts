import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {animation: 'Projects'}
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {animation: 'Services'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {animation: 'About'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {animation: 'Contact'}
  },
  // {
  //   path: 'switch',
  //   component: SwitchComponent,
  //   data: {animation: 'Switch'}
  // },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
