import { Component, OnInit } from '@angular/core';
import { LearnedByPokemon } from '../../models/moves-details-interface';
import { ActivatedRoute } from '@angular/router';
import { MoveService } from '../../services/move.service';

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrl: './move-detail.component.css'
})
export class MoveDetailComponent implements OnInit {

  moveId: string | null = '';
  pokemonAprende: LearnedByPokemon[] | undefined


  constructor(
    private route: ActivatedRoute,
    private moveService: MoveService
  ) { }

  ngOnInit(): void {
    this.moveId = this.route.snapshot.paramMap.get('id');

    this.moveService.getOnemove(parseInt(this.moveId!)).subscribe((response) => {
      this.pokemonAprende = response.learned_by_pokemon;
    })
    }

    getPokemonId(url: string): number {
      var id = url.split('/')[6];
      return parseInt(id);
    }

}
