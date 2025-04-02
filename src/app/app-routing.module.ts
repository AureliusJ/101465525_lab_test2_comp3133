import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission/:id', component: MissiondetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
