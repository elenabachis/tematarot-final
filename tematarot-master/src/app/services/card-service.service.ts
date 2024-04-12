import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private afs: AngularFirestore) { }

  getAllCards() {
    return this.afs.collection('/LoveCard').snapshotChanges();
  }

  getCategoryById(id: string) {
    return this.afs.collection('/LoveCard').doc(id).snapshotChanges();
  }

  getCategoryByIdRef(id: string) {
    return this.afs.collection('/LoveCard').doc(id).ref;
  }
}
