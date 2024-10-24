import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailResponse } from '../../models/pokemon-detail.interface';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonSpeciesResponse } from '../../models/pokemon-species.interface';
import { PokemonTypesResponse } from '../../models/pokemon-types.interface';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent implements OnInit{
  @Input() pokemonId: number | undefined;
  pokemon: PokemonDetailResponse | undefined;
  pokemonSpecies: PokemonSpeciesResponse | undefined;
  pokemonType: PokemonTypesResponse | undefined;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getOnePokemon(this.pokemonId!).subscribe(response => {
      this.pokemon = response;
    });

    this.pokemonService.getPokemonSpecies(this.pokemonId!).subscribe(resp => {
      this.pokemonSpecies = resp;
    })

    this.pokemonService.getPokemonType(this.pokemonId!).subscribe(response => {
      this.pokemonType = response;
    })

  }


  getPokemonId(url: string): number {
    return parseInt(url.split('/')[6]);
  }

  getTypeId(url: string) : number {
    return parseInt(url.split('/')[6]);
  }


}
