import { Component } from '@angular/core';
import { SharedService } from 'src/app/common/sharedService';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.html',
  styleUrls: ['./data-form.scss']
})
export class DataFormComponent {
  amount: number;
  
  constructor(private sharedService: SharedService) {
    this.amount = this.sharedService.getValue();
  };

  addCampaign () {
    
  }
}
