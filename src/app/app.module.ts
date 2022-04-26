import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HojaPersonajeComponent } from './hoja/page/hoja-personaje/hoja-personaje.component';
import { LoginComponent } from './login/page/login/login.component';
import { HomeComponent } from './home/page/home/home.component';
import { LoadingComponent } from './shared/components/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    HojaPersonajeComponent,
    LoginComponent,
    HomeComponent,
    LoadingComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
