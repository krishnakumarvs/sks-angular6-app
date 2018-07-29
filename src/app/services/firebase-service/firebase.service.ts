import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

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
}
