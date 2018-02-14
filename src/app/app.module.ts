import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {FormsModule} from "@angular/forms";
import { FirestoreProvider } from '../providers/firestore/firestore';
import {HttpClientModule} from "@angular/common/http";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var config = {
    apiKey: "AIzaSyDPPNUCQHs602A0x26OtKXg0k-ofQok_3E",
    authDomain: "client-space-mobile.firebaseapp.com",
    databaseURL: "https://client-space-mobile.firebaseio.com",
    projectId: "client-space-mobile",
    storageBucket: "client-space-mobile.appspot.com",
    messagingSenderId: "947181869234"
};


@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        FormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
        AngularFirestoreModule.enablePersistence(),


    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirestoreProvider
    ]
})
export class AppModule {
}
