import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailResponse } from '../../models/pokemon-detail.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokemonList: Pokemon[] = [];
  @Input() pokemonId: number | undefined;
  pokemon: PokemonDetailResponse | undefined;


  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(resp => {
      this.pokemonList = resp.results;
    });
    this.pokemonService.getOnePokemon(this.pokemonId!).subscribe(resp => {
      this.pokemon = resp;
    });
  }

  getPokemonId(url: string): number {
    var id = url.split('/')[6];
    return parseInt(id);
  }



}
