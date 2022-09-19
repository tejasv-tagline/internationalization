import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@ngneat/transloco';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public languages: any[] = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Dutch',
      value: 'du',
    },
    {
      label: 'Spanish',
      value: 'es',
    }
  ];
  public currentLanguage !: any;

  constructor(private translocoService: TranslocoService, private snackBar: MatSnackBar,private globalService:GlobalService) {
    this.currentLanguage = localStorage.getItem('language');
    this.translocoService.setActiveLang(this.currentLanguage);
  }

  ngOnInit(): void {
  }

  updateLanguage(event: any) {
    const language = event.target.value;
    localStorage.setItem('language', language);
    this.globalService.languageDetect$.next(language);
    this.translocoService.setActiveLang(language);
    const selectedLan = this.getLanguageName(language);
    this.snackBar.open('Language updated to ' + selectedLan.label, 'OK');
  }

  public getLanguageName(language: string) {
    return this.languages.find((lan: any) => lan.value === language)
  }
}
