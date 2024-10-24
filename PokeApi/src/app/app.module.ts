import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BerriesListComponent } from './components/berries-list/berries-list.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { MoveDetailComponent } from './components/move-detail/move-detail.component';
import { MoveItemComponent } from './components/move-item/move-item.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    MenuComponent,
    PageNotFoundComponent,
    BerriesListComponent,
    MovesListComponent,
    MoveDetailComponent,
    MoveItemComponent,
    PokemonDetailComponent,
    PokemonItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
