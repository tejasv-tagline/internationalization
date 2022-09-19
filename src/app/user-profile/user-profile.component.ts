import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userData:any = {}
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {
    this.globalService.languageDetect$.subscribe((lan)=>{
      this.userData = this.globalService.getUserData(lan);
    })
  }

}
