import { Component, Input } from '@angular/core';
import { FlavorTextEntry, MoveDetailResponse } from '../../models/moves-details-interface';
import { MoveService } from '../../services/move.service';

@Component({
  selector: 'app-move-item',
  templateUrl: './move-item.component.html',
  styleUrl: './move-item.component.css'
})
export class MoveItemComponent {

  flavorTextEntry: FlavorTextEntry[] = []
  
  @Input() moveId: number | undefined;
  move: MoveDetailResponse | undefined;

  constructor(private moveService: MoveService) {}

  ngOnInit(): void {
    this.moveService.getOnemove(this.moveId!).subscribe((response) => {
      this.move = response;

    
    });
  }

  getMoveId(url: string): number {
    return parseInt(url.split('/')[6]);
  }
}