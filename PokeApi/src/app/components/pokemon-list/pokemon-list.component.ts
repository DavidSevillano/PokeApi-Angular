import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(resp => {
      this.pokemonList = resp.results;
    });
  }

  getPokemonId(url: string): number {
    var id = url.split('/')[6];
    return parseInt(id);
  }



}
