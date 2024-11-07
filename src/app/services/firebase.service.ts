import { Injectable } from '@angular/core';
import { Database, ref, set, get, child, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: Database) {}

  getValues(): Observable<any> {
    const dbRef = ref(this.db, 'accountData');
    return new Observable((observer) => {
      onValue(dbRef, (snapshot) => {
        observer.next(snapshot.val());
      });
    });
  }

  updateValues(data: any): Promise<void> {
    const dbRef = ref(this.db, 'accountData');
    return set(dbRef, data);
  }
}
