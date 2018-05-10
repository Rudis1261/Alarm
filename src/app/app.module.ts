import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

// Firebase
import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// JWT
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

// Env
import { environment } from '../environments/environment';

// Pipes
import { LimitToPipe } from './pipes/limit-to.pipe';

// Services
import { ApiService } from './services/api.service';
import { AuthGuardService } from './services/authguard.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { ModalComponent } from './widgets/modal/modal.component';
import { LoginComponent } from './widgets/login/login.component';
import { ToggleComponent } from './widgets/toggle/toggle.component';
import { EventsComponent } from './shared/events/events.component';
import { StatsComponent } from './shared/stats/stats.component';
import { ZonesComponent } from './shared/zones/zones.component';
import { ZoneComponent } from './widgets/zone/zone.component';
import { Error404Component } from './http/error404/error404.component';
import { ScheduleComponent } from './shared/schedule/schedule.component';
import { NavBarComponent } from './widgets/nav-bar/nav-bar.component';
import { ToolsComponent } from './shared/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    LoginComponent,
    ToggleComponent,
    EventsComponent,
    StatsComponent,
    ZonesComponent,
    ZoneComponent,
    Error404Component,
    ScheduleComponent,
    NavBarComponent,
    ToolsComponent,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'alarm-46e17'),
    //AngularFireDatabase,
    //AngularFirestoreModule,
    AngularFireAuthModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    AuthGuardService,
    AngularFireDatabase,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
