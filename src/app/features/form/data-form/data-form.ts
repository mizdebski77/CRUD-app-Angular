import { Component } from '@angular/core';
import { SharedService } from 'src/app/common/sharedService';
import { Campaign } from './data-formModules';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.html',
  styleUrls: ['./data-form.scss']
})
export class DataFormComponent {

  amount: number;
  campaigns: Campaign[] = [];
  campaign: Campaign = {
    campaignName: '',
    keywords: '',
    campaignFund: 0,
    town: '',
    radius: 0,
    status: '',
  };
  editIndex: number | null = null;

  constructor(private sharedService: SharedService) {
    this.amount = this.sharedService.getValue();
  };

  addCampaign() {
    if (this.campaign.campaignFund > this.amount) {
      alert("Not enough funds in the account.");
      return;
    };

    if (this.editIndex !== null) {
      this.campaigns[this.editIndex] = { ... this.campaign };
      this.editIndex = null;
      this.amount -= this.campaign.campaignFund;

    } else {
      const newCampaign = { ...this.campaign };
      this.campaigns.push(newCampaign);
      this.amount -= this.campaign.campaignFund;
    };

    this.clearForm();
  };

  editCampaign(index: number) {
    this.campaign = { ... this.campaigns[index] };
    this.editIndex = index;
    this.amount += this.campaigns[index].campaignFund;
  };


  deleteCampaign(index: number) {
    this.amount += this.campaigns[index].campaignFund;
    this.campaigns.splice(index, 1);
  };
  

  clearForm() {
    this.campaign = {
      campaignName: '',
      keywords: '',
      campaignFund: 0,
      town: '',
      radius: 0,
      status: '',
    };
  }

  isFormValid(): boolean {
    return (
      this.campaign.campaignName.trim() !== '' &&
      this.campaign.keywords.trim() !== '' &&
      this.campaign.campaignFund > 0 &&
      this.campaign.town !== '' &&
      this.campaign.radius > 0 &&
      this.campaign.status !== ''
    );
  }
}
