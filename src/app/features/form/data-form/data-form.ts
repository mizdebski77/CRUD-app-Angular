import { Component } from '@angular/core';
import { SharedService } from 'src/app/common/sharedService';
import { Campaign } from './data-formModules';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.html',
  styleUrls: ['./data-form.scss']
})
export class DataFormComponent {
  cities: string[] = ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Poznań'];
  selectedCity: string = ''; // Przechowuje wybrane miasto
  editIndex: number | null = null;
  amount: number;
  campaigns: Campaign[] = [];
  campaign: Campaign = {
    campaignName: '',
    keywords: '',
    campaignFund: 0,
    city: '',
    radius: 0,
    status: '',
  };



  constructor(private router: Router, private sharedService: SharedService) {
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
      city: '',
      radius: 0,
      status: '',
    };
  };

  isFormValid(): boolean {
    return (
      this.campaign.campaignName.trim() !== '' &&
      this.campaign.keywords.trim() !== '' &&
      this.campaign.campaignFund > 0 &&
      this.campaign.city !== '' &&
      this.campaign.radius > 0 &&
      this.campaign.status !== ''
    );
  };

  navigateToHome() {
    this.router.navigate(['/home']);
  };
}
