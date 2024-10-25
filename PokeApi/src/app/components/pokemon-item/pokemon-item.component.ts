import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailResponse } from '../../models/pokemon-detail.interface';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonSpeciesResponse } from '../../models/pokemon-species.interface';
import { DamageRelations, DoubleDamageFrom, PokemonTypesResponse } from '../../models/pokemon-types.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent implements OnInit{
  @Input() pokemonId:string | null = '';
  pokemon: PokemonDetailResponse | undefined;
  pokemonSpecies: PokemonSpeciesResponse | undefined;
  pokemonType: DoubleDamageFrom | undefined;
  

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pokemonService.getOnePokemon(this.convertToNumber(this.pokemonId!)).subscribe(response => {
      this.pokemon = response;
    });

    this.pokemonService.getPokemonSpecies(this.convertToNumber(this.pokemonId!)).subscribe(resp => {
      this.pokemonSpecies = resp;
    })

    this.pokemonService.getPokemonType(this.convertToNumber(this.pokemonId!)).subscribe(response => {
      this.pokemonType = response;
    })

    this.route.paramMap.subscribe(params => {
      const idUrl = params.get('id');
      if (idUrl) {
        this.pokemonId = idUrl;
        this.loadPokemonDetail(this.convertToNumber(this.pokemonId)); 
        this.loadPokemonDebilidad(this.convertToNumber(this.pokemonId)); 
        this.loadPokemonDescripcion(this.convertToNumber(this.pokemonId)); 

      }
    });
  }

  loadPokemonDetail(id: number): void {
    this.pokemonService.getOnePokemon(id).subscribe((response) => {
      this.pokemon = response;
    });
  }
  loadPokemonDebilidad(id: number): void {
    this.pokemonService.getPokemonType(id).subscribe((response) => {
      this.pokemonType = response;
    });
  }
  loadPokemonDescripcion(id: number): void {
    this.pokemonService.getPokemonSpecies(id).subscribe((response) => {
      this.pokemonSpecies = response;
    });
  }


  getPokemonId(url: string): number {
    return parseInt(url.split('/')[6]);
  }

  getTypeId(url: string) : number {
    return parseInt(url.split('/')[6]);
  }

  convertToNumber(pokemonId: string): number {
    return parseInt(pokemonId, 10);
  }

}
