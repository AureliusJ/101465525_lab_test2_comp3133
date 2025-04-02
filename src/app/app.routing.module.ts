import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';

const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'filter', component: MissionfilterComponent },
  { path: 'mission/:id', component: MissiondetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
