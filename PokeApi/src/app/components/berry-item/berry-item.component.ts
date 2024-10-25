import { Component, Input, OnInit } from '@angular/core';
import { BerryDetailResponse } from '../../models/berry-detail.interface';
import { BerryItemResponse } from '../../models/berry-item.interface';
import { BerryService } from '../../services/berry.service';
import { BerryListResponse } from '../../models/berries.interface';

@Component({
  selector: 'app-berry-item',
  templateUrl: './berry-item.component.html',
  styleUrl: './berry-item.component.css'
})
export class BerryItemComponent implements OnInit{
  @Input() berryId: number | undefined;
  berryItemId: number | undefined;
  berry: BerryDetailResponse | undefined;
  berryItem: BerryItemResponse | undefined;
  berryList: BerryListResponse | undefined;

  constructor(private berryService: BerryService) {}

  ngOnInit(): void {
    this.berryService.getOneBerry(this.berryId!).subscribe(response => {
      this.berry = response;
    });

    this.berryService.getBerryItem(this.berryItemId!).subscribe(resp => {
      this.berryItem = resp;
    })

    this.berryService.getBerryList().subscribe(response => {
      this.berryList = response;
    })

  }


  getBerryId(url: string): number {
    return parseInt(url.split('/')[6]);
  }

  getBerryItemId(url: string) : number {
    return parseInt(url.split('/')[6]);
  }


}

