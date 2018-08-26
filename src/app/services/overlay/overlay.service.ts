import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  overlayObservable;

  constructor() {
  }

  getUpdates() {
    return new Observable<boolean>((observable) => {
      this.overlayObservable = observable;
    }); 
  }

  showOverlay() {
    this.overlayObservable.next(true);
  }

  hideOverlay() {
    this.overlayObservable.next(false);
  }

}
