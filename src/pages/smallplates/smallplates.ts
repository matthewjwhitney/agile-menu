/* Copyright 2017 Alt-Solutions, LLC. All rights reserved. */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { DescriptionPage } from '../description/description';

@Component({
  selector: 'page-smallplates',
  templateUrl: 'smallplates.html'
})
export class SmallplatesPage {
  items: AfoListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireOfflineDatabase) {

	// Get the Small Plates Database
	this.items = afDB.list('https://menu-52d0d.firebaseio.com/smallplates');
  }
	
  itemTapped(event, item) {
    this.navCtrl.push(DescriptionPage, {
      item: item
    });
  }
}
