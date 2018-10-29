/* Copyright 2017 Alt-Solutions, LLC. All rights reserved. */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {OrderService} from '../../providers/order-service';
import {DescriptionPage} from '../description/description';

@Component({
    selector: 'page-order',
    templateUrl: 'order.html'
})
export class OrderPage {

    orderItems: Array<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: OrderService) {
        this.getOrderItems();
    }

    itemTapped(orderItem) {
        this.navCtrl.push(DescriptionPage, orderItem);
    }

    deleteItem(orderItem) {
		console.log("Item Deleted: " + orderItem.item.title);
        this.service.unorderItem(orderItem)
            .then(() => {
                this.getOrderItems();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getOrderItems() {
        this.service.getOrderItems()
            .then(data => this.orderItems = data);
    }
	
	clearOrderItems() {
		this.service.clearOrderItems();
		this.getOrderItems();
	}

}
