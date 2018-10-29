/* Copyright 2017 Alt-Solutions, LLC. All rights reserved. */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { DescriptionPage } from '../description/description';

@Component({
  selector: 'page-otherbeverages',
  templateUrl: 'otherbeverages.html'
})
export class OtherbeveragesPage {
  items: AfoListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireOfflineDatabase) {

	// Get the Other Beverages Database
	this.items = afDB.list('https://menu-52d0d.firebaseio.com/otherbeverages');
  }
	
  itemTapped(event, item) {
    this.navCtrl.push(DescriptionPage, {
      item: item
    });
  }
}
