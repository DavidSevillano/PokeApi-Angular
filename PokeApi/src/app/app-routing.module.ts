import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { MoveDetailComponent } from './components/move-detail/move-detail.component';

const routes: Routes = [
  { path:'pokemon', component: PokemonListComponent },
  { path:'move', component: MovesListComponent },
  { path:'move/:id', component: MoveDetailComponent },
  { path:'', redirectTo: '/pokemon', pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
