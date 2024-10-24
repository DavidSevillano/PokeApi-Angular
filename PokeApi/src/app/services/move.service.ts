import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Move, MoveListResponse } from '../models/moves.interface';
import { MoveDetailResponse } from '../models/moves-details-interface';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

 
  constructor(private http: HttpClient) { }

  getMoveList(): Observable<MoveListResponse> {
    return this.http.get<MoveListResponse>('https://pokeapi.co/api/v2/move')
  }

  getOnemove(id: number): Observable<MoveDetailResponse> {
    return this.http.get<MoveDetailResponse>(
      `https://pokeapi.co/api/v2/move/${id}`
    );
  }
}