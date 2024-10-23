import { Component, OnInit } from '@angular/core';
import { Move } from '../../models/moves.interface';
import { MoveService } from '../../services/move.service';


@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrl: './moves-list.component.css'
})

export class MovesListComponent implements OnInit {

  moveList: Move[] = [];

  constructor(private moveService: MoveService) {}

  ngOnInit(): void {
    this.moveService.getMoveList().subscribe(resp => {
      this.moveList = resp.results;
    });
  }

  getmoveId(url: string): number {
    var id = url.split('/')[6];
    return parseInt(id);
  }

  

}




