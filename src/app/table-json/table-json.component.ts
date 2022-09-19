import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-table-json',
  templateUrl: './table-json.component.html',
  styleUrls: ['./table-json.component.scss']
})
export class TableJsonComponent implements OnInit {

  public tableData: any = [];
  public language: any;
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.languageDetect$.subscribe((lan)=>{
      this.tableData = this.globalService.getTableData(lan);
    })
  }

}
