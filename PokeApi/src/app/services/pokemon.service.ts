import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon.interface';
import { PokemonDetailResponse } from '../models/pokemon-detail.interface';
import { PokemonSpeciesResponse } from '../models/pokemon-species.interface';
import { PokemonTypesResponse } from '../models/pokemon-types.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon')
  }

  getOnePokemon(id: number): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

  getPokemonSpecies(id: number) : Observable<PokemonSpeciesResponse> {
    return this.http.get<PokemonSpeciesResponse>(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  }

  getPokemonType(id: number) : Observable<PokemonTypesResponse> {
    return this.http.get<PokemonTypesResponse>(`https://pokeapi.co/api/v2/type/${id}/`)
  }
}
