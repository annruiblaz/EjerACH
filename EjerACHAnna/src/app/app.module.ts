import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AutoraComponent } from './components/autora/autora.component';
import {HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './components/error/error.component';
import { VillagersComponent } from './components/villagers/villagers.component';
import { VillagerComponent } from './components/villager/villager.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AutoraComponent,
    ErrorComponent,
    VillagersComponent,
    VillagerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
