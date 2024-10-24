import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BerryListResponse } from '../models/berries.interface';
import { BerryDetailResponse } from '../models/berry-detail.interface';
import { BerryItemResponse } from '../models/berry-item.interface';

@Injectable({
  providedIn: 'root'
})
export class BerryService {

  constructor(private http: HttpClient) { }


  getBerryList(): Observable<BerryListResponse> {
    return this.http.get<BerryListResponse>('https://pokeapi.co/api/v2/berry/')
  }

  getOneBerry(id: number): Observable<BerryDetailResponse> {
    return this.http.get<BerryDetailResponse>(`https://pokeapi.co/api/v2/berry/${id}/`);
  }

  getBerryItem(id: number): Observable<BerryItemResponse> {
    return this.http.get<BerryItemResponse>(`https://pokeapi.co/api/v2/item/${id}/`);
  }

}
