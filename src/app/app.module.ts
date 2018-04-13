import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';



@NgModule({
  declarations: [
    AppComponent,
    ComunicacionComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule.enablePersistence()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
