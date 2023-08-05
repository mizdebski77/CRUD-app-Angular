import { Component } from '@angular/core';
import { SharedService } from 'src/app/common/sharedService';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.html',
  styleUrls: ['./data-form.scss']
})
export class DataFormComponent {

  amount: number;
  campaigns: any[] = [];
  campaign: any = {};
  editIndex: number | null = null;

  constructor(private sharedService: SharedService) {
    this.amount = this.sharedService.getValue();
  };

  addCampaign() {
    if (this.editIndex !== null) {
      this.campaign[this.editIndex] = { ... this.campaign };
      this.editIndex = null;
    } else {
      const newCampaign = { ...this.campaign };
      this.campaign.push(...newCampaign);
    };

    this.clearForm();
  };

  editCampaign(index: number) {
    this.campaign = { ... this.campaign[index] };
    this.editIndex = index;
  };

  deleteCampaign(index: number) {
    this.campaign.splice(index, 1);
  };

  clearForm() {
    this.campaign = {};
  }
}
