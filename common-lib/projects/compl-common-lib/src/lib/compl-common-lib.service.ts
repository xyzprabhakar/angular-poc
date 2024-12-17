import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplCommonLibService {

  constructor() { }

  showAllert(message:string){
    alert("From Lib "+message);
  }
}
