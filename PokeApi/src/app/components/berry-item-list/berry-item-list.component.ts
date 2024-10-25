import { Component, Input } from '@angular/core';
import { BerryDetailResponse } from '../../models/berry-detail.interface';
import { BerryService } from '../../services/berry.service';
import { BerryItemResponse } from '../../models/berry-item.interface';

@Component({
  selector: 'app-berry-item-list',
  templateUrl: './berry-item-list.component.html',
  styleUrl: './berry-item-list.component.css'
})
export class BerryItemListComponent {

  
  berryItem: BerryItemResponse | undefined;
  
  @Input() berryId: number | undefined;
  berry: BerryDetailResponse | undefined;

  constructor(private berryService: BerryService) {}

  ngOnInit(): void {
    this.berryService.getOneBerry(this.berryId!).subscribe((response) => {
      this.berry = response;
    });
    this.berryService.getBerryItem(this.berryId!).subscribe((response) => {
      this.berryItem = response;
    });
  }

  getBerryId(url: string): number {
    return parseInt(url.split('/')[6]);
  }
}
