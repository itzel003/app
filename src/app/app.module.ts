import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AungularFireModule } from "@angular/fire/compat";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore"; 

@NgModule({
  declarations: [AppComponent],
  imports: [
  BrowserModule, 
  IonicModule.forRoot(), 
  AppRoutingModule, 
  AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
  AngularFireAuthModule,
  AngularFirestoreModule, 
],z


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
