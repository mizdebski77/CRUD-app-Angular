import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/common/sharedService';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {

  inputValue: number = 0;

  constructor(private router: Router, private sharedService: SharedService) { }


  gotToNextPage() {
    this.sharedService.setValue(this.inputValue);
    this.router.navigate(['/form']);
  };

}
