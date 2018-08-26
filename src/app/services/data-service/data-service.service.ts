import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase.service';
import { Observable } from 'rxjs';
import { Order } from '../../models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firebaseService: FirebaseService) { }

  fetchSampleData() : Observable<any> {
    return this.firebaseService.fetchFromDatabase("room");
  }

  placeNewOrder(order: Order) {
    return this.firebaseService.placeNewOrder(order);
  }

  fetchAllOrders() {
    return this.firebaseService.fetchAllOrders();
  }

}
