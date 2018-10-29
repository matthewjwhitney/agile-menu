/* Copyright 2017 Alt-Solutions, LLC. All rights reserved. */
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { BeerPage } from '../pages/beer/beer';
import { OtherbeveragesPage } from '../pages/otherbeverages/otherbeverages';
import { SmallplatesPage } from '../pages/smallplates/smallplates';
import { SandwichesPage } from '../pages/sandwiches/sandwiches';
import { LargeplatesPage } from '../pages/largeplates/largeplates';
import { SidesPage } from '../pages/sides/sides';
import { DessertPage } from '../pages/dessert/dessert';
import { SuppliersPage } from '../pages/suppliers/suppliers';
import { AboutPage } from '../pages/about/about';
import { DescriptionPage } from '../pages/description/description';
import { OrderPage } from '../pages/order/order';
import { SupplierInfoPage } from '../pages/supplierinfo/supplierinfo';

import { OrderService } from '../providers/order-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyDVRmmzv6tFsp2jBPNCLWMC8D7d0wRYN8A",
    authDomain: "menu-52d0d.firebaseapp.com",
    databaseURL: "https://menu-52d0d.firebaseio.com",
    projectId: "menu-52d0d",
    storageBucket: "menu-52d0d.appspot.com",
    messagingSenderId: "262062844972"
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    BeerPage,
    OtherbeveragesPage,
    SmallplatesPage,
    SandwichesPage,
    LargeplatesPage,
    SidesPage,
    DessertPage,
	SuppliersPage,
	OrderPage,
	AboutPage,
	SupplierInfoPage,
	DescriptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { pageTransition: 'md-transition' }),
	AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
	AngularFireOfflineModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    BeerPage,
	OtherbeveragesPage,
    SmallplatesPage,
    SandwichesPage,
    LargeplatesPage,
    SidesPage,
    DessertPage,
	SuppliersPage,
	OrderPage,
	AboutPage,
	SupplierInfoPage,
	DescriptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	OrderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
