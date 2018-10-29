/* Copyright 2017 Alt-Solutions, LLC. All rights reserved. */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { SupplierInfoPage } from '../../pages/supplierinfo/supplierinfo';

@Component({
  selector: 'page-suppliers',
  templateUrl: 'suppliers.html'
})
export class SuppliersPage {
  items: AfoListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireOfflineDatabase) {

	// Get the Suppliers Database
	this.items = afDB.list('https://menu-52d0d.firebaseio.com/suppliers');

  }
	
  itemTapped(event, item) {
    this.navCtrl.push(SupplierInfoPage, {
      supplier: item.$key
    });
  }
}
