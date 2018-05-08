import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/authguard.service';

import { HomeComponent } from './shared/home/home.component';
import { ScheduleComponent } from './shared/schedule/schedule.component';
import { ZonesComponent } from './shared/zones/zones.component';
import { EventsComponent } from './shared/events/events.component';
import { StatsComponent } from './shared/stats/stats.component';
import { ToolsComponent } from './shared/tools/tools.component';

import { Error404Component } from './http/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'schedule',  component: ScheduleComponent, canActivate: [ AuthGuardService ] },
  { path: 'events',  component: EventsComponent, canActivate: [ AuthGuardService ] },
  { path: 'zones',  component: ZonesComponent, canActivate: [ AuthGuardService ] },
  { path: 'stats',  component: StatsComponent, canActivate: [ AuthGuardService ] },
  { path: 'tools',  component: ToolsComponent, canActivate: [ AuthGuardService ] },
  { path: '404',  component: Error404Component },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule { }
