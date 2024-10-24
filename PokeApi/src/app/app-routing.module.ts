import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';

import { BerriesListComponent } from './components/berries-list/berries-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path:'pokemon', component: PokemonListComponent },
  { path:'pokemon/:id', component: PokemonDetailComponent },
  { path:'moves', component: MovesListComponent },
  { path:'move/:id', component: MoveDetailComponent },
  { path:'berries', component: BerriesListComponent},
  { path:'', redirectTo: '/pokemon', pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
