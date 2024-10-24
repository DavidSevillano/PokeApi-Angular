import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Berry } from '../../models/berries.interface';
import { BerryDetailResponse } from '../../models/berry-detail.interface';
import { BerryService } from '../../services/berry.service';

@Component({
  selector: 'app-berry-detail',
  templateUrl: './berry-detail.component.html',
  styleUrl: './berry-detail.component.css'
})
export class BerryDetailComponent {
  berryList: Berry[] = [];
  berryId: any;
  berry: BerryDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private berryService: BerryService
  ) {}

  ngOnInit(): void {
    this.berryId = this.route.snapshot.paramMap.get('id');

    this.berryService.getBerryList().subscribe((resp) => {
      this.berryList = resp.results;
    });
    
    
    if (this.berryId) {
      this.berryService.getOneBerry(parseInt(this.berryId)).subscribe(response => {
        this.berry = response;
      });
    }
  }

  getBerryId(url: string): number {
    return parseInt(url.split('/')[6]);
  }

}
