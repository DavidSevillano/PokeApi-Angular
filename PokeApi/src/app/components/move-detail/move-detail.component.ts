import { Component, Input, OnInit } from '@angular/core';
import { LearnedByPokemon } from '../../models/moves-details-interface';
import { ActivatedRoute } from '@angular/router';
import { MoveService } from '../../services/move.service';


@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrl: './move-detail.component.css'
})
export class MoveDetailComponent implements OnInit {

  @Input() moveId: string | null = '';
  pokemonAprende: LearnedByPokemon[] | undefined
  move: any;


  constructor(
    private route: ActivatedRoute,
    private moveService: MoveService,
  ) { }

  ngOnInit(): void {
    // Suscribirse a los cambios en los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      const idUrl = params.get('id');
      if (idUrl) {
        this.moveId = idUrl; // Asigna el ID
        this.loadMoveDetail(this.convertToNumber(this.moveId)); // Carga los detalles
      }
    });
  }

    loadMoveDetail(id: number): void {
      this.moveService.getOnemove(id).subscribe((response) => {
        this.pokemonAprende = response.learned_by_pokemon;
        this.move = response;
      });
    }

    getPokemonId(url: string): number {
      var id = url.split('/')[6];
      return parseInt(id);
    }

    convertToNumber(moveId: string): number {
      return parseInt(moveId, 10); // Convierte el string a número
    }

}
