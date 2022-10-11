import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos/dos.component';
import { BebidasComponent } from './components/bebidas/bebidas/bebidas.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsComponent } from './components/pokemons/pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent,
    BebidasComponent,
    PokemonsComponent
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
