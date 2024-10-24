import { Component, OnInit } from '@angular/core';
import { Berry, BerryListResponse } from '../../models/berries.interface';
import { BerryService } from '../../services/berry.service';
import { BerryDetailResponse } from '../../models/berry-detail.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-berries-list',
  templateUrl: './berries-list.component.html',
  styleUrl: './berries-list.component.css'
})
export class BerriesListComponent implements OnInit{

  berryList: Berry[] = [];

  constructor (private berryService: BerryService) {}

  ngOnInit(): void {
    this.berryService.getBerryList().subscribe(resp => {
      this.berryList = resp.results;
    });

    
  }

  getBerryId(url: string): number {
    var id = url.split('/')[6];
    return parseInt(id);

  }


}
