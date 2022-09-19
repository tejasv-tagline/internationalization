import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public language: any = localStorage.getItem('language');
  public languageDetect$ = new BehaviorSubject<any>(this.language);
  public engData = [
    {
      id: '1',
      date: '1 oct,21',
      status: 'Paid',
      customer: 'Althan Travis',
      purchased: 'Wirecard for figma',
      revenue: '$0.99'
    },
    {
      id: '2',
      date: '12 Oct, 21',
      status: 'Failed',
      customer: 'Tomo arvis',
      purchased: 'Altroz furry',
      revenue: '$0.19'
    },
    {
      id: '3',
      date: '1 Nov, 21',
      status: 'Paid',
      customer: 'Althan Travis',
      purchased: 'Apple Macbook air',
      revenue: '$1.99'
    },
    {
      id: '4',
      date: '19 Oct, 21',
      status: 'Paid',
      customer: 'Travis head',
      purchased: 'Apple Macbook Pro',
      revenue: '$9.99'
    },
    {
      id: '5',
      date: '1 Oct, 21',
      status: 'Paid',
      customer: 'Althan Travis',
      purchased: 'Altroz furry',
      revenue: '$0.19'
    },
  ];
  public dutchData = [
    {
      id: '1',
      date: '1 okt,21',
      status: 'Betaald',
      customer: 'Althan Travis',
      purchased: 'Wirecard voor figma',
      revenue: '€0.99'
    },
    {
      id: '2',
      date: '12 okt, 21',
      status: 'Mislukt',
      customer: 'Tomo arvis',
      purchased: 'Altroz ​​furry',
      revenue: '€0.19'
    },
    {
      id: '3',
      date: '1 Nov, 21',
      status: 'Betaald',
      customer: 'Althan Travis',
      purchased: 'Apple Macbook air',
      revenue: '€1.99'
    },
    {
      id: '4',
      date: '19 okt, 21',
      status: 'Betaald',
      customer: 'Travis head',
      purchased: 'Apple Macbook Pro',
      revenue: '€9.99'
    },
    {
      id: '5',
      date: '1 okt, 21',
      status: 'Betaald',
      customer: 'Althan Travis',
      purchased: 'Altroz furry',
      revenue: '€0.19'
    },
  ]
  public esData = [
    {
      id: '1',
      date: '1 de octubre,21',
      status: 'Pagado',
      customer: 'Althan Travis',
      purchased: 'Wirecard para figma',
      revenue: '0.99 FRF'
    },
    {
      id: '2',
      date: '12 de octubre, 21',
      status: 'Error',
      customer: 'Tomo arvis',
      purchased: 'Altroz ​​peludo',
      revenue: '0.19 FRF'
    },
    {
      id: '3',
      date: '1 de noviembre, 21',
      status: 'Pagado',
      customer: 'Althan Travis',
      purchased: 'Apple Macbook air',
      revenue: '1.99 FRF'
    },
    {
      id: '4',
      date: '19 de octubre, 21',
      status: 'Pagado',
      customer: 'cabeza de Travis',
      purchased: 'Apple Macbook Pro',
      revenue: '9.99 FRF'
    },
    {
      id: '5',
      date: '1 de octubre, 21',
      status: 'Pagado',
      customer: 'Althan Travis',
      purchased: 'Altroz furry',
      revenue: '0.19 FRF'
    },
  ];

  public enUserData = {
    location: 'United States',
    companyName: 'Simpleqode.com',
    position: 'Front-end developer',
    comments: "58584",
    member: 'Jan 01, 2016',
    lastLogin: "1 day ago"
  }

  public esUserData = {
    location: 'Estados Unidos',
    companyName: 'Simpleqode.com',
    position: 'Desarrollador front-end',
    comments: "58584",
    member: '01 de enero de 2016',
    lastLogin: "hace 1 día"
  }

  public duUserData = {
    location: 'Verenigde Staten',
    companyName: 'Simpleqode.com',
    position: 'Front-end ontwikkelaar',
    comments: "58584",
    member: '01 januari 2016',
    lastLogin: "1 dag geleden"
  }


  constructor() { }

  getTableData(lan: any): any {
    switch (lan) {
      case 'en':
        return this.engData;
      case 'du':
        return this.dutchData;
      case 'es':
        return this.esData;
      default:
        return null;
    }
  }

  getUserData(lan: any): any {
    switch (lan) {
      case 'en':
        return this.enUserData;
      case 'du':
        return this.duUserData;
      case 'es':
        return this.esUserData;
      default:
        return null;
    }
  }
}
