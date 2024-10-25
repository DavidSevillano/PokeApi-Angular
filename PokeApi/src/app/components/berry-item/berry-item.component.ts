import { Component, Input, OnInit } from '@angular/core';
import { BerryDetailResponse } from '../../models/berry-detail.interface';
import { BerryItemResponse } from '../../models/berry-item.interface';
import { BerryService } from '../../services/berry.service';
import { BerryListResponse } from '../../models/berries.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-berry-item',
  templateUrl: './berry-item.component.html',
  styleUrl: './berry-item.component.css'
})
export class BerryItemComponent implements OnInit{
  @Input() berryId: string | null = '';
  berryItemId: number | undefined;
  berry: BerryDetailResponse | undefined;
  berryItem: BerryItemResponse | undefined;
  berryList: BerryListResponse | undefined;

  constructor(
    private berryService: BerryService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idUrl = params.get('id');
      if (idUrl) {
        this.berryId = idUrl;
        this.loadBerryDetail(this.convertToNumber(this.berryId));
      }
    });
  }

  loadBerryDetail(id: number): void {
    this.berryService.getOneBerry(id).subscribe((response) => {
      this.berry = response;
    });
    this.berryService.getBerryItem(this.convertToNumber(this.berryId!)).subscribe(resp => {
      this.berryItem = resp;
    })
    this.berryService.getBerryList().subscribe(response => {
      this.berryList = response;
    })

  }


  getBerryId(url: string): number {
    return parseInt(url.split('/')[6]);
  }

  convertToNumber(moveId: string): number {
    return parseInt(moveId, 10);
  }
}

