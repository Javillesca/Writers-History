import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { WritersComponent } from './components/writers/writers.component';
import { WriterComponent } from './components/writer/writer.component';
import { SeekerComponent } from './components/shared/seeker/seeker.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'writers', component: WritersComponent },
  { path: 'writer/:id', component: WriterComponent },
  { path: 'search/:value', component: SeekerComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'writers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
