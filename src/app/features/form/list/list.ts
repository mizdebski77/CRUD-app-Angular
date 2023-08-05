import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class ListComponent {

  @Input() campaigns: any[] = [];
  @Output() editCampaign: EventEmitter<number> = new EventEmitter<number>();

  deleteCampaign(index: number) {
    this.campaigns.splice(index, 1);
  };

  onEditCampaign(index: number) {
    this.editCampaign.emit(index);
  }
}
