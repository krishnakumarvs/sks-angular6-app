import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private firebaseService: FirebaseService) { }

  fetchSampleData() : Observable<any> {
    return this.firebaseService.fetchFromDatabase("room");
  }
}
