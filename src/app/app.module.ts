import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './templetes/rodape/rodape.component';
import { HomeComponent } from './templetes/home/home.component';
import { NavbarComponent } from './templetes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    HomeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
