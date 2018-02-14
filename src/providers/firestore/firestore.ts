import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class FirestoreProvider {

  constructor(public http: HttpClient,private db: AngularFirestore) {
  }

  addToFireStore(name:string, lastname:string){
      alert("hi")
      this.db.collection('names').add({
          name:name,
          lastname:lastname
      });
    //console.log(name + " " + lastname + "---> firestore provider")

  }


}
