import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Order } from '../../models/model';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(private fireStone: AngularFirestore,
    private database: AngularFireDatabase) {
  }

  fetchFromFireStone(collectionName: string) : Observable<any> {
    return this.fireStone.collection(collectionName).valueChanges();
  }

  fetchFromDatabase(collectionName: string) : Observable<any> {
    return this.database.object(collectionName).valueChanges();
  }

  placeNewOrder(order: Order) {
    return this.database.list(Order.collectionName).push(order);
  }

  fetchAllOrders() {
    return this.database.object(Order.collectionName).valueChanges();
  }
}
