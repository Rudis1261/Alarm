import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { ModalComponent } from './widgets/modal/modal.component';

// Env
import { environment } from '../environments/environment';
import { LoginComponent } from './widgets/login/login.component';
import { ToggleComponent } from './widgets/toggle/toggle.component';
import { EventsComponent } from './shared/events/events.component';
import { StatsComponent } from './shared/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    LoginComponent,
    ToggleComponent,
    EventsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'alarm-46e17'),
    //AngularFireDatabase,
    //AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
