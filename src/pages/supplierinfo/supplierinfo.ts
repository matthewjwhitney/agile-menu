/* Copyright 2017 Alt-Solutions, LLC. All rights reserved. */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AfoObjectObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';

@Component({
  selector: 'page-supplierinfo',
  templateUrl: 'supplierinfo.html'
})
export class SupplierInfoPage {
	supplierItem: any;
	item: AfoObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireOfflineDatabase) {
	  this.supplierItem = navParams.get('supplier');
	  this.item = afDB.object("https://menu-52d0d.firebaseio.com/suppliers/"+this.supplierItem);
	  }
}
