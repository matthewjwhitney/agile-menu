/* Copyright 2017 Alt-Solutions, LLC. All rights reserved. */
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { OrderService } from '../../providers/order-service';
import { SupplierInfoPage } from '../../pages/supplierinfo/supplierinfo';
import { ActionSheetController } from 'ionic-angular';

import { AfoObjectObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html'
})
export class DescriptionPage {
	item: any;
	supplierItem: AfoObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public OrderService: OrderService, public toastCtrl: ToastController, public afDB: AngularFireOfflineDatabase) {
	  this.item = navParams.get('item');
	  console.log(this.item.supplier);
	  if (this.item.supplier != null) {
		this.supplierItem = afDB.object("https://menu-52d0d.firebaseio.com/suppliers/"+this.item.supplier);
	  }
  }
  
      orderItem(item) {
		/* TODO: Add later. Need to pass in topping to OrderService.
		if (item.toppings) {
			  var fields = item.toppings.split(', ');
			  var i;
			  let actionSheet = this.actionSheetCtrl.create({title: 'CHOOSE YOUR TOPPINGS:'});
			  for (i = 0; i < fields.length; i++) {
				  // console.log(fields[i]);
				  actionSheet.addButton({
					text: fields[i],
					handler: () => {
						// TODO: Fix this code. Find a way to get text string
						// console.log('this.text');
						this.OrderService.orderItem(item).then(item => {
							let toast = this.toastCtrl.create({
								message: 'Item added to order. Go to MY ORDER to see your order.',
								cssClass: 'mytoast',
								duration: 4000
							});
							toast.present(toast);
						});
					}
				  });
			  }
			  actionSheet.present();
		}
		*/
		this.OrderService.orderItem(item).then(item => {
			let toast = this.toastCtrl.create({
				message: 'Item added to order. Go to MY ORDER to see your order.',
				cssClass: 'mytoast',
				duration: 4000
			});
			toast.present(toast);
		});
    }
	
	supplierInfo(supplier) {
		// console.log("Supplier: " + supplier);
		this.navCtrl.push(SupplierInfoPage, {
			supplier: supplier,
			menuItem: this.item
		});
	}
}
