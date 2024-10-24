import { Component } from '@angular/core';
import { PokemonDetailResponse } from '../../models/pokemon-detail.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  pokemonId: string | null = '';
  pokemon: PokemonDetailResponse | undefined;

  //pokemonDetailList: PokemonDetailResponse[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    
    this.pokemonService.getOnePokemon(parseInt(this.pokemonId!)).subscribe(response => {
      this.pokemon = response;
    });
  }


}
