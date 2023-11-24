import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';


import { SharedModule } from './shared/shared.module';
import { TabelComponent } from './pipes/tabel/tabel.component';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [  //pipes,dir,compon
    AppComponent,
    LandingComponent,
    TabelComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
