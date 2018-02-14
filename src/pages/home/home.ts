import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FirestoreProvider} from "../../providers/firestore/firestore";
import {Observable} from "rxjs/Observable";
import {AngularFirestore} from "angularfire2/firestore";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    names: Observable<any>

    constructor(public navCtrl: NavController, private firestore: FirestoreProvider, private db: AngularFirestore) {

    }

    ngOnInit() {
        const nameRef = this.db.collection(`/names`);
        this.names = nameRef.valueChanges();
    }

    onInsert(form) {
        const name = form.value.name;
        const lastname = form.value.lastname;
        this.firestore.addToFireStore(name, lastname);

    }

}
