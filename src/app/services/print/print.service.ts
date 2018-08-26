import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }

  printPage(printContents) {
  var popupWin = window.open('', '_blank');
  popupWin.document.open();
  popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="assets/printStyle.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
  popupWin.document.close();
  }
}
