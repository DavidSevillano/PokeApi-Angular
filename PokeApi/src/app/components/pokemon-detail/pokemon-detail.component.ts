import { Component } from '@angular/core';
import { PokemonDetailResponse } from '../../models/pokemon-detail.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
//import { Pokemon } from '../../models/pokemon.interface';
import { Pokemon, PokemonListResponse } from '../../models/pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  pokemonList: Pokemon[] = [];

  pokemonId: string | null = '';
  pokemon: PokemonDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id');

    this.pokemonService.getPokemonList().subscribe((resp) => {
      this.pokemonList = resp.results;
    });
    
    this.pokemonService.getOnePokemon(parseInt(this.pokemonId!)).subscribe(response => {
      this.pokemon = response;
    });
  }

  getPokemonId(url: string): number {
    return parseInt(url.split('/')[6]);
  }
  


}
