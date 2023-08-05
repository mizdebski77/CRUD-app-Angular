import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Campaign } from '../data-form/data-formModules';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class ListComponent {

  @Input() campaigns: Campaign[] = [];
  @Output() editCampaign: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteCampaign: EventEmitter<number> = new EventEmitter<number>(); // Dodaj nowe zdarzenie

  onDeleteCampaign(index: number) {
    this.deleteCampaign.emit(index);
  }

  onEditCampaign(index: number) {
    this.editCampaign.emit(index);
  }
}
